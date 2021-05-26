
$x('//h1/a/text()').reduce(x=>x.wholeText)
//  result by console --> "Quotes to Scrape"

$x('//h1/a/text()').map(x=>x.wholeText)
//  result by console --> ["Quotes to Scrape"]

$x('/html/body/div[1]/div[2]/div[1]/div[1]/span[1]/text()').map(x=>x.wholeText);

//  result by console -->["“The world as we have created it is a process of o…cannot be changed without changing our thinking.”"]