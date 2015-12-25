/*
 * openSans Chrome plugin
 * Author: Kelly Johnson
 *
 */

/* globals chrome */

function openSans(info, tab) {
  if (info.linkUrl) {
    var url = info.linkUrl.split('?')[0];
    var options = {
      // Open next to this one, default is at end of tabs
      index: tab.index + 1,
      openerTabId: tab.id,
      url: url
    };

    chrome.tabs.create(options);
  }
}

chrome.contextMenus.create({
  title: "Open Sans Query",
  contexts: ["link"],
  onclick: openSans
});

function copySans(info, tab) {
  if (info.linkUrl) {
    var url = info.linkUrl.split('?')[0];
    // TODO copy url to clipboard
  }
}

chrome.contextMenus.create({
  title: "Copy Link Sans Query",
  contexts: ["link"],
  onclick: copySans
});
