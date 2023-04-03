const { JSDOM } = require("jsdom")

/* 
* TDD steps:
  - Stub out fxn you want to test
  - Write test
  - Implement the meat of the function
*/

async function crawlPage(currentURL) {
   console.log(`actively crawling: ${currentURL}`);

   try {
      const resp = await fetch(currentURL);
      console.log(resp);
      if (resp.status > 399) {
         console.log(`Error in fetch with status code: ${resp.status} on page: ${currentURL}`);
         throw new Error(`Error in fetch with status code: ${resp.status} on page: ${currentURL}`);
      }
      const contentType = resp.headers.get("content-type");
      if (contentType.includes("text/html")){
         throw new Error(`non html response: ${contentType} on page: ${currentURL}`);
      }
      console.log(await resp.text());
   } catch (error) {
      console.error(`Error in fetch: ${error}, on page: ${currentURL}`);
   }


}

function getURLsFromHTML(htmlBody, baseURL) {
   const urls = [];
   const dom = new JSDOM(htmlBody);
   const linkElements = dom.window.document.querySelectorAll('a');
   for (const linkElement of linkElements) {
      if (linkElement.href.slice(0, 1) === '/') {
         // relative
         try {
            const urlObj = new URL(`${baseURL}${linkElement.href}`);
            urls.push(urlObj.href);
         } catch (error) {
            console.log(`Error with relative url: ${error.message}`);
         }

      } else {
         // absolute
         try {
            const urlObj = new URL(linkElement.href);
            urls.push(urlObj.href);
         } catch (error) {
            console.log(`Error with absolute url: ${error.message}`);
         }
      }

   }
   return urls;
}

function normalizeURL(urlString) {
   const urlObj = new URL(urlString);
   const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
   if (hostPath.length > 0 && hostPath.slice(-1) === '/') return hostPath.slice(0, -1)
   return hostPath;
}

module.exports = {
   crawlPage,
   getURLsFromHTML,
   normalizeURL
}