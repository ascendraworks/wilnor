import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:text-left">
        {/* Column 1: Contact Info */}
        <div>
          <h3 className="mb-3 font-semibold">Contact Us</h3>
          <p className="text-sm text-muted-foreground">Wilnor & Lavett's Employment</p>
          <p className="text-sm text-muted-foreground">354 Clementi Ave 2, #01-177A, Singapore 120354</p>
          <p className="text-sm text-muted-foreground">Email: wilnorlavett@gmail.com</p>
          <p className="text-sm text-muted-foreground">WhatsApp: +6580763141</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-3 font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {/* Links will go here */}
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Home</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Promotion</a></li>
          </ul>
        </div>

        {/* Column 3: Trust Badges / Social Media */}
        <div>
          <h3 className="mb-3 font-semibold">Follow Us / Trust</h3>
          {/* Trust badges or social media icons will go here */}
          <p className="text-sm text-muted-foreground">Trust Badges Placeholder</p>
        </div>
      </div>
      <div className="mt-8 border-t border-border/40 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Wilnor & Lavett's Employment. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;