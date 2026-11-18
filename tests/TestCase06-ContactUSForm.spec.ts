import {test,expect} from "../fixtures/ProjectFixtures";

import users from "../test-data/user.json";

test("Contact Us Form",async({page,HomePage,ContactUS})=>{

await HomePage.ProjectHomePage();

await HomePage.ContactUSPage();

await expect(page.getByText("Get In Touch")).toBeVisible();

//const filePath = "\\Documents";
page.once("dialog",async dialog=>{

    console.log(dialog.message());
    await dialog.accept();
});

await ContactUS.conactUsPage(users.ContactUSuser.name,users.ContactUSuser.Email,users.ContactUSuser.subject
   , users.ContactUSuser.message,"C:\\Users\\SSatishAdmuthe\\Documents\\DEFECTS.docx"
);

const SuccessMessage = page.getByText("Success! Your details have been submitted successfully.").first();
await expect(SuccessMessage).toBeVisible({ timeout: 15000 });


})
