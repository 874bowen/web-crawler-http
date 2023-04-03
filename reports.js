function printReport(pages) {
   console.log("==================");
   console.log("Page Visits Report");
   console.log("==================");
   const sortedPages = sortPages(pages);
   for (const page of sortedPages) {
      console.log(`Found ${page[1]} ${page[1] > 1 ? ' links': ' link'} to page: ${page[0]}`);
   }
   console.log("==================");
   console.log("End of Report");
   console.log("==================");
}

function sortPages(pages) {
   const pagesArray = Object.entries(pages)
   pagesArray.sort((a, b) => b[1] - a[1])
   return pagesArray;
}

module.exports = {
   sortPages,
   printReport
}