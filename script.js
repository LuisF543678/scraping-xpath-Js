
$x('//h1/a/text()').reduce(x => x.wholeText)
//  result by console --> "Quotes to Scrape"

$x('//h1/a/text()').map(x => x.wholeText)
//  result by console --> ["Quotes to Scrape"]

$x('/html/body/div[1]/div[2]/div[1]/div[1]/span[1]/text()').map(x => x.wholeText);

//  result by console -->["“The world as we have created it is a process of o…cannot be changed without changing our thinking.”"]



$x('/html/body/div[1]/div[2]/div[1]/div[1]/span[1]/text()').map(x => x.wholeText)


// 1
$x('/html/body/div[1]/div[2]/div[1]/div[1]/span[1]/text()').map(x => x.wholeText)


//2 
$x('/html/body/div[1]/div[2]/div[1]/div[2]/span[1]/text()').reduce(x => x.wholeText)


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




// eje en sistaxis

$x('//autor[@fechaNacimiento]').map(x => x.outerText)
// result by console --> (4) ["Mario Vargas Llosa", "Mario Vargas Llosa", "Mario Vargas Llosa", "Mario Vargas Llosa"]


$x('/html/body/biblioteca/autor[2]').map(x =>x.outerHTML)




$x('/html/body/biblioteca/div/autor[2][@fechaNacimiento]').reduce(x => x.innerHTML)

parentNode.innerHTML


$x('/html/body/biblioteca/libro[1]/text()').map(x =>x.parentNode.innerHTML)


$x('/html/body/biblioteca/libro[autor="Mario Vargas Llosa"]').reduce(x =>x.innerHTML)


x('/html/body/biblioteca/libro[1]/fechapublicacion').reduce(x =>x.parentNode.innerHTML)

$x('//././libro[last()]').reduce(x =>x.innerHTML)

$x('//./biblioteca/libro[1]/fechapublicacion/@año[.>1970]').reduce(x =>x.innerHTML)

$x('/html/body/biblioteca/libro[1]/fechapublicacion').reduce(x =>x.innerHTML)

// 1
$x('//*[@id="default"]/div[1]/div/div/div/section/div[2]/ol/li/article/h3/a').map(x =>x.innerText)

// 1 -2 
$x('//*[@id="default"]//././/.//.//h3/a').map(x =>x.innerText)

// 2
$x('//*[@id="default"]/div[1]/div/div/div/section/div[2]/ol/li/article/div[2]/p[1]').map(x =>x.innerText)


// 2 - 2
$x('//*[@id="default"]//.//././/././article/div[2]/p[1]').map(x =>x.innerText) 

// 3 
$x('//*[@id="default"]/div[1]/div/div/aside//ul/li/a/text()').map(x =>x.innerText)

// 3 -3 
$x('//*[@id="default"]//.//aside//ul/li/a/text()').map(x =>x.innerText)



// name books 

$x('//*[@id="default"]/div/div/div/div/section/div/ol/li/article/h3/a').map(x =>x.lastChild.data)

// cost books

$x('//*[@id="default"]/div[1]/div/div/div/section/div[2]/ol/li/article/div/p').map(x =>x.lastChild.data)


// Description book

$x('//*[@id="content_inner"]/article/p/text()').reduce(x =>x.wholeText)