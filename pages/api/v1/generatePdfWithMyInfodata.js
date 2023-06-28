import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import { cwd } from "node:process";
import moment from "moment";
// import { myinfo } from "../../../components/Reports/dummyData";
import GeneratePdfWithMyInfodataPage from "../../templates/generatePdfWithMyInfodataPage";
import GeneratePdfWithMyInfodataHeader from "../../../components/GeneratePdfWithMyInfodata/generatePdfWithMyInfodataHeader";
import GeneratePdfWithMyInfodataFooter from "../../../components/GeneratePdfWithMyInfodata/generatePdfWithMyInfodataFooter";

export default async function handler(req, res) {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });

    const page = await browser.newPage();

    let partnerImageUrl = req?.body?.partnerImageUrl
      ? await fetch(req?.body?.partnerImageUrl)
          .then((r) => r.buffer())
          .then((buf) => `data:image/png;base64,` + buf.toString("base64"))
      : undefined;

    let html = ReactDOMServer.renderToString(
      <GeneratePdfWithMyInfodataPage data={req.body} />
    );
    let header = ReactDOMServer.renderToString(
      <GeneratePdfWithMyInfodataHeader
        showData={true}
        partnerImageUrl={partnerImageUrl}
      />
    );
    let footer = ReactDOMServer.renderToString(
      <GeneratePdfWithMyInfodataFooter partnerImageUrl={partnerImageUrl} />
    );

    await page.setContent(html);
    await page.addStyleTag({
      path: `${cwd()}/node_modules/antd/dist/antd.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/globals.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/generatePdfWithMyInfodata.css`,
    });
    await page.emulateMediaType("screen");
    const buffer = await page.pdf({
      preferCSSPageSize: true,
      printBackground: true,
      landscape: false,
      format: "A4",
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: footer,
      margin: {
        bottom: 100, // minimum required for footer msg to display
        left: 15,
        right: 15,
        top: 100,
      },
    });
    await browser.close();

    var encryptedBytes = Buffer.from(buffer).toString("base64");
    encryptedBytes.toString("base64");
    let base64Data = encryptedBytes;
    res.status(200).json({ data: base64Data });
  } catch (error) {
    await browser?.close();
    console.log(
      "/v1/generatePdfWithMyInfodata-error",
      error,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    res.status(500).json({ data: error });
  }
}
