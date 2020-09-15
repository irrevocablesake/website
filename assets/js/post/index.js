var headings = document.getElementById('contentSectionId').querySelectorAll('h1, h2, h3, h4, h5, h6');

console.log(headings);

var output="";

for (i = 0; i < headings.length; i++) 
{
    headings[i].id=(headings[i].textContent).split(" ").join("_"); 
}

for (i = 0; i < headings.length; i++) 
{
    if(i==0)
    {
        output=output+"<ul class='custom'>";
        output=output+"<a href='#"+headings[i].id+"'><li>"+headings[i].textContent+"</li></a>";
    }
    else
    {
        var lastTag=parseInt(((headings[i-1].tagName).toString()).split("H").join(""));
        var currentTag=parseInt((headings[i].tagName).toString().split("H").join(""));
        
        if((currentTag-lastTag)>0)
        {
            for( j=0;j<(currentTag-lastTag);j++ )
            {
                output=output+"<ul class'custom'>";
                output=output+"<a href='#"+headings[i].id+"'><li>"+headings[i].textContent+"</li></a>";
            }
        }
        else if((currentTag-lastTag)<0)
        {
            var absvalue=(Math.abs(currentTag-lastTag));
            for( j=0;j<absvalue;j++ )
            {                
                output=output+"</ul>";
            }
            output=output+"<a href='#"+headings[i].id+"'><li>"+headings[i].textContent+"</li></a>";
        }
        else if((currentTag-lastTag)==0)
        {
            output=output+"<a href='#"+headings[i].id+"'><li>"+headings[i].textContent+"</li></a>";
        }
    } 
}

output=output+"</ul>";

console.log(output);
$('#toc').html(output);

