
$x('//h1/a/text()').reduce(x=>x.wholeText)
//  result by console --> "Quotes to Scrape"

$x('//h1/a/text()').map(x=>x.wholeText)
//  result by console --> ["Quotes to Scrape"]

$x('/html/body/div[1]/div[2]/div[1]/div[1]/span[1]/text()').map(x=>x.wholeText);

//  result by console -->["“The world as we have created it is a process of o…cannot be changed without changing our thinking.”"]



$x('/html/body/div[1]/div[2]/div[1]/div[1]/span[1]/text()').map(x => x.wholeText)




// 3
$x('//./div[1]/div[2]/div[1]/div[3]/span[1]/text()').map(x => x.data)


// 4
$x('//./div[1]/div[2]/div[1]/div[4]/span[1]/text()').map(x => x.textContent)


// 5
$x('//././././div[5]/span[1]/text()').reduce(x => x.data)


// 6
$x('//././././div[6]/span[1]/text()').reduce(x => x.contentData)


// 7
$x('/html/body/div[1]/div[2]/div[1]/div[7]/span[1]/text()').map(x => x.nodeValue)


// 8
$x('//././././div[8]/span[1]/text()').reduceRight(x => x.wholeText)

// 9
$x('//./././div/div[9]/span[1]/text()').reduce(x => x.textContent)

// 10
$x('//././/././div[10]/span[1]/text()').map(x => x.data)
$x('//././/.//div[10]/span[1]/text()').map(x => x.data)