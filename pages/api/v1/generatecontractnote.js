import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";

import { cwd } from "node:process";
import Header from "../../../components/Reports/reportsHeader";
import ContractNote from "../../templates/contractnote";
import moment from "moment";

export default async function handler(req, res) {
  //console.log("/contractnote", moment().format("YYYY-MM-DD HH:mm:ss"));
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });

    const page = await browser.newPage();
    let html = ReactDOMServer.renderToString(<ContractNote data={req.body} />);
    let header = ReactDOMServer.renderToString(<Header />);

    await page.setContent(html);
    await page.addStyleTag({
      path: `${cwd()}/node_modules/antd/dist/antd.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/globals.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/contractnote.css`,
    });

    await page.emulateMediaType("screen");
    const buffer = await page.pdf({
      preferCSSPageSize: true,
      printBackground: true,
      landscape: false,
      format: "A4",
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: `<span></span>`,
      margin: {
        bottom: 35, // minimum required for footer msg to display
        left: 35,
        right: 35,
        top: 80,
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
      "/contractnote-error",
      error,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    res.status(500).json({ data: error });
  }
}
