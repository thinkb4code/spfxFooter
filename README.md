## Solution
This solution was create to address StackExchange problem listed at https://sharepoint.stackexchange.com/questions/264104/how-to-add-an-instagram-facebook-and-twitter-logos-in-sharepoint-modern-communi

## Footer

Bootstrap SPFx project for creating footer with images. 

## Output
![Footer UI](https://raw.githubusercontent.com/thinkb4code/spfxFooter/master/screenshots/render.PNG)

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp trust-dev-cert
gulp serve
```

In order to run this solution on your SharePoint online tenant while development, update the `config/serve.json` file. 
Change the URL from `https://contoso.sharepoint.com/sites/mySite/SitePages/myPage.aspx` to something like `https://<tenant_name>.sharepoint.com/sites/mySite/SitePages/myPage.aspx`.
