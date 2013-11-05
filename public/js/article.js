/*
 * Populates the display with an initial article.
 * Author: Tyler Tretsven
 */


var article = [{
  type: "H1",
  text: "Responsive Web Design"
}, {
  type: "P",
  text: "The English architect Christopher Wren once quipped that his chosen field “aims for Eternity,” and there’s something appealing about that formula: Unlike the web, which often feels like aiming for next week, architecture is a discipline very much defined by its permanence. A building’s foundation defines its footprint, which defines its frame, which shapes the facade. Each phase of the architectural process is more immutable, more unchanging than the last. Creative decisions quite literally shape a physical space, defining the way in which people move through its confines for decades or even centuries."
}, {
  type: "P",
  text: "Working on the web, however, is a wholly different matter. Our work is defined by its transience, often refined or replaced within a year or two. Inconsistent window widths, screen resolutions, user preferences, and our users’ installed fonts are but a few of the intangibles we negotiate when we publish our work, and over the years, we’ve become incredibly adept at doing so."
}, {
  type: "H2",
  text: "A Flexible Foundation"
}, {
  type: "P",
  text: "But the landscape is shifting, perhaps more quickly than we might like. Mobile browsing is expected to outpace desktop-based access within three to five years. Two of the three dominant video game consoles have web browsers (and one of them is quite excellent). We’re designing for mice and keyboards, for T9 keypads, for handheld game controllers, for touch interfaces. In short, we’re faced with a greater number of devices, input modes, and browsers than ever before."
}, {
  type: "P",
  text: "In recent years, I’ve been meeting with more companies that request “an iPhone website” as part of their project. It’s an interesting phrase: At face value, of course, it speaks to mobile WebKit’s quality as a browser, as well as a powerful business case for thinking beyond the desktop. But as designers, I think we often take comfort in such explicit requirements, as they allow us to compartmentalize the problems before us. We can quarantine the mobile experience on separate subdomains, spaces distinct and separate from “the non-iPhone website.” But what’s next? An iPad website? An N90 website? Can we really continue to commit to supporting each new user agent with its own bespoke experience? At some point, this starts to feel like a zero sum game. But how can we—and our designs—adapt?"
}, {
  type: "H3",
  text: "A Flexible Foundation"
}, {
  type: "P",
  text: "But the landscape is shifting, perhaps more quickly than we might like. Mobile browsing is expected to outpace desktop-based access within three to five years. Two of the three dominant video game consoles have web browsers (and one of them is quite excellent). We’re designing for mice and keyboards, for T9 keypads, for handheld game controllers, for touch interfaces. In short, we’re faced with a greater number of devices, input modes, and browsers than ever before."
}, {
  type: "P",
  text: "In recent years, I’ve been meeting with more companies that request “an iPhone website” as part of their project. It’s an interesting phrase: At face value, of course, it speaks to mobile WebKit’s quality as a browser, as well as a powerful business case for thinking beyond the desktop. But as designers, I think we often take comfort in such explicit requirements, as they allow us to compartmentalize the problems before us. We can quarantine the mobile experience on separate subdomains, spaces distinct and separate from “the non-iPhone website.” But what’s next? An iPad website? An N90 website? Can we really continue to commit to supporting each new user agent with its own bespoke experience? At some point, this starts to feel like a zero sum game. But how can we—and our designs—adapt?"
}];

FontViewer.populate = function(articleArray) {
  for (var i = 0; i < articleArray.length; i++) {
    var elem = $("<" + articleArray[i].type + ">" + articleArray[i].text + "</" + articleArray[i].type + ">").hide().fadeIn(800);
    $(this.displayContainer).append(elem);
  }
};

FontViewer.update = function(articleArray) {
  for (var i = 0; i < articleArray.length; i++) {
    $(this.displayContainer).append("<" + articleArray[i].type + ">" + articleArray[i].text + "</" + articleArray[i].type + ">");
  }
};