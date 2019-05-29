describe("Emirates", function () {
  
    it("Open Homepage", function () {   	  
      browser.url('https://www.emirates.com');
      var title = browser.getTitle();
      expect(title).to.contains('Emirates');	 	  
    });
  
    /*it("Homepage", function () {   
      var body = browser.checkElement('body');
      expect(body[0].isWithinMisMatchTolerance).to.be.true;	  
    });*/
  
    it("Emirates Logo", function () {   
      var logo = browser.checkElement('[data-id="header_logo_link"]');
      expect(logo[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Menu", function () {   
      var menu = browser.checkElement('.megalinks-list-parent');
      expect(menu[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Secondary Menu", function () {   
      var sMenu = browser.checkElement('[class="js-ek-global-navigation-secondarymenu ek-global-navigation__secondarymenu"]');
      expect(sMenu[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Secondary Menu", function () {   
      var sMenu = browser.checkElement('[class="js-ek-global-navigation-secondarymenu ek-global-navigation__secondarymenu"]');
      expect(sMenu[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Search widget for Search flights", function () {   
      var widget = browser.checkElement('.widget__container');
      expect(widget[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Search widget for Manage booking or check in", function () {   
      browser.click('#tab1'); 
      var widget = browser.checkElement('.widget__container');
      expect(widget[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Search widget for What's on your flight", function () {   
      browser.click('#tab2'); 
      var widget = browser.checkElement('.widget__container');
      expect(widget[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Search widget for Flight status", function () {   
      browser.click('#tab3'); 
      var widget = browser.checkElement('.widget__container');
      expect(widget[0].isWithinMisMatchTolerance).to.be.true;	  
    });
  
    it("Product block", function () {   
      var block = browser.checkElement('.product-block');
      expect(block[0].isWithinMisMatchTolerance).to.be.true;	  
    });

  });
  
