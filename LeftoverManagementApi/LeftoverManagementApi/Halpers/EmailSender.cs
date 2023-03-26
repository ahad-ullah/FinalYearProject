using MimeKit;
using MailKit.Net.Smtp;

namespace LeftoverManagementApi.Halpers
{
    public class EmailSender : IEmailService
    {
        public static string CreateToken()
        {
            return Guid.NewGuid().ToString();
        }
        public void SendEmail(string ToEmail, string emailBody)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("LeftoverManagementTeam"));
            email.To.Add(MailboxAddress.Parse(ToEmail));
            email.Subject = "Testing email sending in .net core web api";
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = emailBody };
            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
            smtp.Authenticate("ahadullahmujahid@gmail.com", "xwjxjyaawjluyqep");
            smtp.Send(email);
            smtp.Disconnect(true);
        }

        public string CreateEmail(string token)
        {
            string html = @"<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv=""Content-Type"" content=""text/html; charset=utf-8"" />
    <meta name=""viewport"" content=""width=device-width, initial-scale=1"">
    <meta http-equiv=""X-UA-Compatible"" content=""IE=edge"" />
    <style type=""text/css"">
        @media screen {
            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 400;
                src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 700;
                src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
            }
        }

        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        /* RESET STYLES */
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* MOBILE STYLES */
        @media screen and (max-width:600px) {
            h1 {
                font-size: 32px !important;
                line-height: 32px !important;
            }
        }

        /* ANDROID CENTER FIX */
        div[style*=""margin: 16px 0;""] {
            margin: 0 !important;
        }
		
		.gradient-back {
    /* fallback for old browsers */
    background: #fccb90;
    
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    }
	
	.gradient-back2 {
    /* fallback for old browsers */
    text-color: #fccb90;
    
    /* Chrome 10-25, Safari 5.1-6 */
    text-color: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-color: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
    }
    </style>
</head>

<body style=""background-color: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593); margin: 0 !important; padding: 0 !important;"">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style=""display: none; font-size: 1px; color: white; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;""> We're thrilled to have you here! Get ready to dive into your new account.
    </div>
    <table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"">
        <!-- LOGO -->
        <tr>
            <td  class=""gradient-back""  align=""center"">
                <table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"" style=""max-width: 600px;"">
                    <tr>
                        <td align=""center"" valign=""top"" style=""padding: 40px 10px 40px 10px;""> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td  class=""gradient-back""  align=""center"" style=""padding: 0px 10px 0px 10px;"">
                <table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"" style=""max-width: 600px;"">
                    <tr>
                        <td bgcolor=""#ffffff"" align=""center"" valign=""top"" style=""padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;"">
                            <h1 style=""font-size: 48px; font-weight: 400; margin: 2;"">Welcome</h1> <img src="" https://img.icons8.com/clouds/100/000000/handshake.png"" width=""125"" height=""120"" style=""display: block; border: 0px;"" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor=""#f4f4f4"" align=""center"" style=""padding: 0px 10px 0px 10px;"">
                <table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"" style=""max-width: 600px;"">
                    <tr>
                        <td bgcolor=""#ffffff"" align=""left"" style=""padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"">
                            <p style=""margin: 0;"">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor=""#ffffff"" align=""left"">
                            <table width=""100%"" border=""0"" cellspacing=""0"" cellpadding=""0"">
                                <tr>
                                    <td bgcolor=""#ffffff"" align=""center"" style=""padding: 20px 30px 60px 30px;"">
                                        <table border=""0"" cellspacing=""0"" cellpadding=""0"">
                                            <tr>
                                                <td align=""center"" style=""border-radius: 3px;"" class=""gradient-back""><a href=""replaceWithLink"" target=""_blank"" style=""font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #FFA73B; display: inline-block;"">Confirm Account</a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr> <!-- COPY -->
                    <tr>
                        <td bgcolor=""#ffffff"" align=""left"" style=""padding: 0px 30px 0px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"">
                            <p style=""margin: 0;"">If that doesn't work, copy and paste the following link in your browser:</p>
                        </td>
                    </tr> <!-- COPY -->
                    <tr>
                        <td bgcolor=""#ffffff"" align=""left"" style=""padding: 20px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"">
                            <p style=""margin: 0;""><a href=""#"" target=""_blank"" class=""gradient-back2"" >replaceWithLink</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor=""#ffffff"" align=""left"" style=""padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"">
                            <p style=""margin: 0;"">If you have any questions, just reply to this email&mdash;we're always happy to help out.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor=""#ffffff"" align=""left"" style=""padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"">
                            <p style=""margin: 0;"">Cheers,<br>BBB Team</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor=""#f4f4f4"" align=""center"" style=""padding: 30px 10px 0px 10px;"">
                <table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"" style=""max-width: 600px;"">
                    <tr>
                        <td bgcolor=""#FFECD1"" align=""center"" style=""padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;"">
                            <h2 style=""font-size: 20px; font-weight: 400; color: #111111; margin: 0;"">Need more help?</h2>
                            <p style=""margin: 0;""><a href=""#"" target=""_blank"" class=""gradient-back2"" >We&rsquo;re here to help you out</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor=""#f4f4f4"" align=""center"" style=""padding: 0px 10px 0px 10px;"">
                <table border=""0"" cellpadding=""0"" cellspacing=""0"" width=""100%"" style=""max-width: 600px;"">
                    <tr>
                        <td bgcolor=""#f4f4f4"" align=""left"" style=""padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;""> <br>
                            <p style=""margin: 0;"">If these emails get annoying, please feel free to <a href=""#"" target=""_blank"" style=""color: #111111; font-weight: 700;"">unsubscribe</a>.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>".Replace("replaceWithLink", token);
            //string html = string.Format("<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <title></title>\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <style type=\"text/css\">\r\n        @media screen {\r\n            @font-face {\r\n                font-family: 'Lato';\r\n                font-style: normal;\r\n                font-weight: 400;\r\n                src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');\r\n            }\r\n\r\n            @font-face {\r\n                font-family: 'Lato';\r\n                font-style: normal;\r\n                font-weight: 700;\r\n                src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');\r\n            }\r\n\r\n            @font-face {\r\n                font-family: 'Lato';\r\n                font-style: italic;\r\n                font-weight: 400;\r\n                src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');\r\n            }\r\n\r\n            @font-face {\r\n                font-family: 'Lato';\r\n                font-style: italic;\r\n                font-weight: 700;\r\n                src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');\r\n            }\r\n        }\r\n\r\n        /* CLIENT-SPECIFIC STYLES */\r\n        body,\r\n        table,\r\n        td,\r\n        a {\r\n            -webkit-text-size-adjust: 100%;\r\n            -ms-text-size-adjust: 100%;\r\n        }\r\n\r\n        table,\r\n        td {\r\n            mso-table-lspace: 0pt;\r\n            mso-table-rspace: 0pt;\r\n        }\r\n\r\n        img {\r\n            -ms-interpolation-mode: bicubic;\r\n        }\r\n\r\n        /* RESET STYLES */\r\n        img {\r\n            border: 0;\r\n            height: auto;\r\n            line-height: 100%;\r\n            outline: none;\r\n            text-decoration: none;\r\n        }\r\n\r\n        table {\r\n            border-collapse: collapse !important;\r\n        }\r\n\r\n        body {\r\n            height: 100% !important;\r\n            margin: 0 !important;\r\n            padding: 0 !important;\r\n            width: 100% !important;\r\n        }\r\n\r\n        /* iOS BLUE LINKS */\r\n        a[x-apple-data-detectors] {\r\n            color: inherit !important;\r\n            text-decoration: none !important;\r\n            font-size: inherit !important;\r\n            font-family: inherit !important;\r\n            font-weight: inherit !important;\r\n            line-height: inherit !important;\r\n        }\r\n\r\n        /* MOBILE STYLES */\r\n        @media screen and (max-width:600px) {\r\n            h1 {\r\n                font-size: 32px !important;\r\n                line-height: 32px !important;\r\n            }\r\n        }\r\n\r\n        /* ANDROID CENTER FIX */\r\n        div[style*=\"margin: 16px 0;\"] {\r\n            margin: 0 !important;\r\n        }\r\n\t\t\r\n\t\t.gradient-back {\r\n    /* fallback for old browsers */\r\n    background: #fccb90;\r\n    \r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);\r\n    \r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);\r\n    }\r\n\t\r\n\t.gradient-back2 {\r\n    /* fallback for old browsers */\r\n    text-color: #fccb90;\r\n    \r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    text-color: -webkit-linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);\r\n    \r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    text-color: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);\r\n    }\r\n    </style>\r\n</head>\r\n\r\n<body style=\"background-color: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593); margin: 0 !important; padding: 0 !important;\">\r\n    <!-- HIDDEN PREHEADER TEXT -->\r\n    <div style=\"display: none; font-size: 1px; color: white; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;\"> We're thrilled to have you here! Get ready to dive into your new account.\r\n    </div>\r\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n        <!-- LOGO -->\r\n        <tr>\r\n            <td  class=\"gradient-back\"  align=\"center\">\r\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\r\n                    <tr>\r\n                        <td align=\"center\" valign=\"top\" style=\"padding: 40px 10px 40px 10px;\"> </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td  class=\"gradient-back\"  align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\r\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;\">\r\n                            <h1 style=\"font-size: 48px; font-weight: 400; margin: 2;\">Welcome</h1> <img src=\" https://img.icons8.com/clouds/100/000000/handshake.png\" width=\"125\" height=\"120\" style=\"display: block; border: 0px;\" />\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\r\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\r\n                            <p style=\"margin: 0;\">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"left\">\r\n                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n                                <tr>\r\n                                    <td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 20px 30px 60px 30px;\">\r\n                                        <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n                                            <tr>\r\n                                                <td align=\"center\" style=\"border-radius: 3px;\" class=\"gradient-back\"><a href=\"{0}\" target=\"_blank\" style=\"font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #FFA73B; display: inline-block;\">Confirm Account</a></td>\r\n                                            </tr>\r\n                                        </table>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </td>\r\n                    </tr> <!-- COPY -->\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 0px 30px 0px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\r\n                            <p style=\"margin: 0;\">If that doesn't work, copy and paste the following link in your browser:</p>\r\n                        </td>\r\n                    </tr> <!-- COPY -->\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 20px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\r\n                            <p style=\"margin: 0;\"><a href=\"#\" target=\"_blank\" class=\"gradient-back2\" >https://bit.li.utlddssdstueincx</a></p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\r\n                            <p style=\"margin: 0;\">If you have any questions, just reply to this email&mdash;we're always happy to help out.</p>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td bgcolor=\"#ffffff\" align=\"left\" style=\"padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\r\n                            <p style=\"margin: 0;\">Cheers,<br>BBB Team</p>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 30px 10px 0px 10px;\">\r\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\r\n                    <tr>\r\n                        <td bgcolor=\"#FFECD1\" align=\"center\" style=\"padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;\">\r\n                            <h2 style=\"font-size: 20px; font-weight: 400; color: #111111; margin: 0;\">Need more help?</h2>\r\n                            <p style=\"margin: 0;\"><a href=\"#\" target=\"_blank\" class=\"gradient-back2\" >We&rsquo;re here to help you out</a></p>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td bgcolor=\"#f4f4f4\" align=\"center\" style=\"padding: 0px 10px 0px 10px;\">\r\n                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" style=\"max-width: 600px;\">\r\n                    <tr>\r\n                        <td bgcolor=\"#f4f4f4\" align=\"left\" style=\"padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;\"> <br>\r\n                            <p style=\"margin: 0;\">If these emails get annoying, please feel free to <a href=\"#\" target=\"_blank\" style=\"color: #111111; font-weight: 700;\">unsubscribe</a>.</p>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</body>\r\n\r\n</html>", token);

            return html;
        }
    }
}
