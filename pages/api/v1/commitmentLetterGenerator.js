import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import CommitmentLetterPage from "../../templates/commitmentLetter";

import { cwd } from "node:process";
import moment from "moment";
import CommitmentLetterHeader from "../../../components/CommitmentLetter/commitmentLetterHeader";

export default async function handler(req, res) {
  //console.log("/commitmentLetter", moment().format("YYYY-MM-DD HH:mm:ss"));
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });
    const page = await browser.newPage();
    let logoUrl = req?.body?.logoUrl
      ? await fetch(req?.body.logoUrl)
          .then((r) => r.buffer())
          .then((buf) => `data:image/png;base64,` + buf.toString("base64"))
      : undefined;
    let html = ReactDOMServer.renderToString(
      <CommitmentLetterPage data={req.body} />
    );
    let header = ReactDOMServer.renderToString(
      <CommitmentLetterHeader partnerImageUrl={logoUrl} data={req.body} />
    );
    await page.setContent(html);
    await page.addStyleTag({
      path: `${cwd()}/node_modules/antd/dist/antd.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/globals.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/commitmentletter.css`,
    });

    await page.emulateMediaType("screen");
    const buffer = await page.pdf({
      preferCSSPageSize: true,
      printBackground: true,
      landscape: false,
      format: "A4",
      headerTemplate: header,
      footerTemplate: `<></>`,
      displayHeaderFooter: true,
      margin: {
        bottom: 60, // minimum required for footer msg to display
        left: 40,
        right: 40,
        top: 100,
      },
    });
    await browser.close();

    var encryptedBytes = Buffer.from(buffer).toString("base64");
    encryptedBytes.toString("base64");
    let base64Data = encryptedBytes;

    res.status(200).json({ data: base64Data });
  } catch (error) {
    await browser.close();
    console.log(
      "/commitmentLetter-error",
      error,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    res.status(500).json({ data: error });
  }
}
