import puppeteer from "puppeteer";
import ReactDOMServer from "react-dom/server";
import { cwd } from "node:process";
import TaxHeader from "../../../components/AutomatedTaxStatement/taxHeader";
import Footer from "../../../components/Reports/reportsFooterV2";
import moment from "moment";
import AutomatedTaxReportsPage from "../../templates/getAutomatedTaxStatementPage.js";
import { disclaimerTextTax } from "../../../components/Reports/utils";
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
export default async function handler(req, res) {
  let browser = null;
  try {
    browser = await puppeteer.launch({
      headless: true,

      pipe: true,
      args: [
        "--headless",
        "--disable-gpu",
        "--full-memory-crash-report",
        "--unlimited-storage",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],

    });
    const page = await browser.newPage();
    let partnerImageUrl = req?.body?.partnerImageUrl
      ? await fetch(req?.body?.partnerImageUrl)
          .then((r) => r.buffer())
          .then((buf) => `data:image/png;base64,` + buf.toString("base64"))
          .catch((err) => console.log("image-err", err))
      : undefined;
    let html = ReactDOMServer.renderToString(
      <AutomatedTaxReportsPage data={req.body} />
    );
    let header = ReactDOMServer.renderToString(
      <TaxHeader partnerImageUrl={partnerImageUrl} data={req.body} />
    );
    let footer = ReactDOMServer.renderToString(
      <Footer
        displayText={req?.body?.name}
        disclaimerText={disclaimerTextTax}
        periodText={`Uploaded on: ${moment().format("ddd, DD MMM YYYY")}`}
      />
    );

    await page.setContent(html);
    await page.addStyleTag({
      path: `${cwd()}/node_modules/antd/dist/antd.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/globals.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/reports.css`,
    });
    await page.addStyleTag({
      path: `${cwd()}/styles/tax.css`,
    });

    await page.emulateMediaType("screen");
    const buffer = await page.pdf({
      preferCSSPageSize: true,
      printBackground: true,
      landscape: true,
      format: "A4",
      displayHeaderFooter: true,
      headerTemplate: header,
      footerTemplate: footer,
      margin: {
        bottom: 120,
        left: 20,
        right: 20,
        top: 100,
      },
      timeout: 0,
    });
    await browser.close();

    var encryptedBytes = Buffer.from(buffer).toString("base64");
    encryptedBytes.toString("base64");
    let base64Data = encryptedBytes;
    res.status(200).json({ data: base64Data });
  } catch (error) {
    console.log(
      "getAutomatedTaxStatement-error",
      error,
      moment().format("YYYY-MM-DD HH:mm:ss")
    );
    await browser.close();
    res.status(500).json({ data: error });
  }
}
