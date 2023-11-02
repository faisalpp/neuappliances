const {WEBSITE_NAME} = require('../config/index')

class EmailTemplates{
 
    static ForgotPasswordTemplate(tokenUrl){
   const body = `
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Password Reset Request</title>
   </head>
   <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f6f6f6;">
       <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);">
           <div style="text-align: center; margin-bottom: 20px;">
               <h2>Password Reset Request</h2>
           </div>
           <div style="padding: 20px;">
               <p>Hello,</p>
               <p>We have received a request to reset your password. If you did not make this request, please ignore this email.</p>
               <p>To reset your password, please click on the button below:</p>
               <p>
                   <a href="${tokenUrl}" style="display: inline-block; background-color: #3498db; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px;" target="_blank">Reset Password</a>
               </p>
               <p>If the button above does not work, you can also copy and paste the following link into your web browser:</p>
               <p>${tokenUrl}</p>
               <p>If you need further assistance or have any questions, please feel free to contact our support team.</p>
               <p>Thank you!</p>
           </div>
       </div>
   </body>
   </html>
   `
   return body;
 }
 static NewAccountTemplate({fullName,email,password,loginUrl}){
   const body = `
   <!DOCTYPE html>
   <html>
   <head>
   </head>
   <body style="font-family: Arial, sans-serif; line-height: 1.6;">
       <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
           <h2>Your New Account Details for [Ecommerce Store Name]</h2>
           <p>Dear ${fullName},</p>
           <p>Thank you for shopping with us at ${WEBSITE_NAME}. We have created a new account for you based on your recent purchase. Below are the details you will need to access your account:</p>
           <p><strong>Email:</strong> ${email}<br>
           <strong>Temporary Password:</strong> ${password}</p>
           <p>To ensure the security of your account, we recommend that you change your password upon logging in for the first time. You can access your account and manage your orders, view your order history, and update your personal information through the following link:</p>
           <p><a style="display: inline-block; background: #3498db; color: #ffffff; padding: 10px 20px; text-decoration: none; border: none; border-radius: 5px;" href="${loginUrl}">Login to Your Account</a></p>
           <p>Thank you for choosing us for your shopping needs. We look forward to serving you again.</p>
       </div>
   </body>
   </html>   
   `;
   return body;
 }

 static NewOrderCardTemplate(orders){
    let cardHtml = '';
    for (let i=0;i<orders?.length;i++) {
        cardHtml += `
        <div style=" display: flex; gap: 14px ">
        <div style=" min-width: 64px; position: relative ">
            <img src="${item[i].image}" style=" width: 64px; height: 64px; object-fit: contain " alt="" />
            <span style=" position: absolute; width: 21px; height: 21px; color: white; font-weight: 500; display: flex; justify-content: center; align-items: center; top: -10px; right: -10px; font-size: 12px; border-radius: 100%; padding: 2px; backgroundColor: #22A6AB ">
                1
            </span>
        </div>
        <div style=" display: flex; gap: 14px; justify-content: space-between; align-items: center; flex-wrap: wrap; width: 100% ">
            <div>
                <h3 style=" font-size: 14px; font-weight: 500; color: #333; letter-spacing: -0.2px ">White GE 1.7 cu. ft. Over the Range Microwave with Convenience</h3>
                <p style=" color: #737373; font-size: 12px; letter-spacing: -0.2px ">
                    ${item[i].rating} Stars (Flawless Cosmetic Rating)
                </p>
            </div>
            <div style=" color: #22A6AB; font-size: 14px; font-weight: 500 ">
                ${item[i].salePrice ? item[i].salePrice : item[i].regPrice}
            </div>
        </div>
     </div>   
        `
    }
   return cardHtml;
 }
 static NewOrderTemplate(orderNo,host,shippingAddress,billingAddress,cartCount,grandTotal,orders,date){
   const body = `
   <!DOCTYPE html>
   <html>
   <head>
   </head>
   <body>
   <div style="display:flex;display-direction:column; max-width: 960px; margin: 0 auto ">
   <nav style=" background-color: #071822; padding: calc(25px) ">
       <img src='${host}/email/neu.webp' alt="" style=" margin: 0 auto; height: 40px; object-fit: contain " />
   </nav>
   <div style=" padding: 40px calc(5vw); display: flex; flex-direction: column; gap: 40px ">
       <img src="${host}/email/email_banner.webp" alt="" style=" margin: 0 auto " />
       <div style=" color: #242424; font-size: 20px ">
           <h3>Dear User</h3>
           <p style=" margin-top: 40px ">
               Your Neu Appliance order #${orderNo} has successfully been placed; You will find all the details about your order below; and we’ll send you a shipping confirmation email as soon as your order ships; In the meantime; you can shared Neu Appliance and earn store credit.
           </p>
       </div>
       <h2 style=" font-size: 20px; color: #242424 ">Questions? Suggestions? Insights show thoughts? Shoot us an email</h2>
       <div style=" border: 1px solid #D9D9D9; border-radius: 8px; padding: 0 16px ">
           <div style=" font-size: 14px; display: flex; align-items: center; flex-wrap: wrap; gap: 24px; padding: 12px 0px; border-bottom: 1px solid #D9D9D9 ">
               <h3 style=" color: #737373; min-width: 123px ">Order Number</h3>
               <span style=" color: #111010; font-weight: 500 ">#${orderNo}</span>
           </div>
           <div style=" font-size: 14px; display: flex; align-items: center; flex-wrap: wrap; gap: 24px; padding: 12px 0px; border-bottom: 1px solid #D9D9D9 ">
               <h3 style=" color: #737373; min-width: 123px ">Order Date</h3>
               <span style=" color: #111010; font-weight: 500 ">${date}</span>
           </div>
           <div style=" font-size: 14px; display: flex; align-items: center; flex-wrap: wrap; gap: 24px; padding: 12px 0px; border-bottom: 1px solid #D9D9D9 ">
               <h3 style=" color: #737373; min-width: 123px ">Shipping Address</h3>
               <span style=" color: #111010; font-weight: 500 ">${shippingAddress}</span>
           </div>
           <div style=" font-size: 14px; display: flex; align-items: center; flex-wrap: wrap; gap: 24px; padding: 12px 0px; border-bottom: 1px solid #D9D9D9 ">
               <h3 style=" color: #737373; min-width: 123px ">Billing Address</h3>
               <span style=" color: #111010; font-weight: 500 ">${billingAddress}</span>
           </div>
       </div>
       <div style=" border: 1px solid #D9D9D9; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; gap: 16px; width: 100% ">
           <h3 style=" font-size: 16px; color: #242424; font-weight: 500; letter-spacing: -0.2px ">Here’s what you ordered.</h3>
           <div style=" padding: 16px calc(1.89vw) ">
            ${this.NewOrderCardTemplate(orders)}
           </div>
           <hr />
           <div style=" display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap ">
               <h3 style=" font-size: 20px; font-weight: 600 ">Subtotal (${cartCount} Items):</h3>
               <span style=" font-size: 32px; font-weight: 600 ">
                   $${grandTotal}
               </span>
           </div>
       </div>
   </div>
   <div style=" background-color: #071822; padding: 20px; color: white; font-size: 12px; display: flex; justify-content: center; align-items: center; gap: 40px; flex-wrap: wrap ">
       <span>&#169; 2023 Neu Appliances</span>
       <div style=" display: flex; align-items: center; gap: 6px ">
           <a href="${host}/terms" >Terms of Use</a>   •   <a href="${host}/privacy-policy">Privacy Policy</a>   •   <a href="${host}/help-and-support">Help Center</a>
       </div>
   </div>
</div>
   </body>
   </html>   
   `;
   return body;
 }

}

module.exports = EmailTemplates;
