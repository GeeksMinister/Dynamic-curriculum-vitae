## Easter eggs
Click on the profile photo to change the background image. Click on the heading ‘Curriculum vitae’ to change back the background. <br />
Type the combination ‘1337’ to trigger the popup modal. You can press ‘ESC’ , ‘Space’ or ‘Enter’ to reset the input and type in the correct combination. The modal disappears if the html body gets clicked on anywhere after it was shown. 

## Web accessibility guidelines  
I have carefully followed WCAG (Web Content Accessibility Guidelines) to make the website fully accessible and to deliver its content without any trouble. Here are some of the steps that i did <br />
I specified the language in the html tag (lang = "sv") so that browsers should know which language is used in my pages and possibly ask the user if he wants to translate to another language. <br />
The fonts I used were the clearest I could find. I also tested color contrasts between the color of the text and the background on https://webaim.org/ and it was approved according to WCAG. <br />
I placed the headings in a clear and correct place and made sure that they have a simple description to prevent visitors from feeling lost or confused. <br />
I went through the relevant guidelines to my page and double-checked if there is anything that needs to be fixed, and then used the online test tool for accessibility on
https://webbriktlinjer.se/testa-din-webbplats.  ![image](https://user-images.githubusercontent.com/98697297/167631097-4f63e283-0c38-41d5-bcb0-42b69f55ec7a.png)

## Responsivity in different devices / screens
The first thing I did to make sure that the web page will look good on different screens, was to use 'viewport' in the meta tag so that the pages will always have the same width as the user's screen. (viewport "content =" width = device-width, initial-scale = 1.0). <br />
Thanks to the feedback I got on the previous website, I realized that the website wasn’t 100% responsive, so I had to revise some of the CSS-code to improve the headings, tables, and the layout for the contact form in “Kontakta mig” <br />
To make the elements adjust themselves automatically and nicely in different screen sizes, I’ve mainly used the brilliant size units: “ vh, wh, %, max-width/height “ and a bit of media queries. <br />
I also had to use Chrome Devtools 'device mode' all the time during development to test and check what the website looks like on tablets, mobiles, and other screens .

## Compatibility 
I have tested how the pages appear on the following browsers: <br /> Chrome, Microsoft Edge, Addblocker, Opera, Safari, Firefox. Everything seemed to work as it should. <br />
To make sure that browsers will correctly render the content from the code, I also validated my HTML & CSS files on validator.w3.org, and there were no errors nor warnings were shown regarding any part in the code files. <br />
For the backup font-family I used ‘Times New Roman’ and Arial since they are widely supported in any browser. <br />
I did check every property and function I have in my JavaScript or CSS files on “caniuse.com” and everything came out with a pretty heigh global implementation rate, like 97% and above. <br /> 
However, the lowest rate was for the CSS function clamp(), which was 91%, so I had to add a backup property to support the outdated browsers for more than two-years.
