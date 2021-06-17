
// import { actions } from '../Redux/Actions/ContactAction';
// import $ from 'jquery';
// import { history } from "../App";
// import configData from "../config.json";
// import { createBrowserHistory } from 'history'
// const historyRefresh = createBrowserHistory({ forceRefresh: true })

// var url = window.location;
// var contactId = url.pathname.split('/')[2];

// var userId;
// var userName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[2]) : (url.pathname.split('/')[1]);
// var paperName = (url.pathname.split('/')[1]) === "admin" ? (url.pathname.split('/')[3]) : (url.pathname.split('/')[2]);
// export const TokenToString = document.cookie && document.cookie.includes("devJwt") ? document.cookie.split(";")
//     .filter(s => s.includes('devJwt'))[0].split("=").pop() : null;

// function checkPermission(result) {
//     return new Promise((resolve, reject) => {
//         if (result && result.status && result.status === 401) {
//             window.location.href = result.routes ?
//                 `https://accounts.codes/papers/login?routes=${result.routes}` :
//                 `https://accounts.codes/papers/login`;
//             reject(false)

//         }
//         resolve(true)

//     })
// }

// export const extractJwt = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'EXTRACT_JWT') {
//         let params = (new URL(document.location)).searchParams;
//         let jwtGlobal = params.get('jwt');
//         if (jwtGlobal) {
//             let newUrl = window.location.href
//             newUrl = newUrl.split('?jwt=')
//             newUrl = newUrl[0]
//             let date = new Date(Date.now() + 86400e3);
//             date = date.toUTCString();
//             var expires = "expires=" + date;
//             document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";domain=.dev.leader.codes;path=/";
//             window.location.replace(newUrl)
//         }
//         else {
//             // dispatch({ type: 'CHANGE_UMTOUID' });

//         }
//     }
//     return next(action);

// }
// function limitToPay() {
//     debugger;
//     return new Promise((resolve, reject) => {

//         fetch(`https://pay.leader.codes/premium`, {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 appName: "Papers",
//                 userName: userName
//             })
//         }).then(resp => resp.json()).then(data => {
//             if (data.premium === true)
//                 resolve(true)
//             resolve(false)
//         }).catch((err) => {
//             reject(err)
//         })


//     })
// }
// function paperInLeaderBox(getState) {
//     return new Promise((resolve, reject) => {
//         return fetch('https://api.dev.leader.codes/' + { userName } + '/createSystemWav', {
//             method: 'POST',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             // {subject, body, to, from, source, files}
//             body: JSON.stringify({ "subject": "הצעת מחיר", "body": window.location, "to": getState().quote.quote.contactDetailsTo, "from": getState().quote.quote.contactDetailsFrom, "source": "papers" }),
//         }).then((res) => res.json()).then((resJson) => {
//             resolve(resJson.planIndex)

//         }).catch((err) => {
//             reject(null)

//         })

//     })
// }
// export const getContactFromServer = ({ dispatch, getState }) => next => action => {

//     if (contactId && action.type === 'GET_CONTACT') {

//         console.log(userId, contactId)
//         return fetch(configData.SERVER_URL + userName + '/getContact', {
//             method: 'POST',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "userID": userId,
//                 "contactId": contactId
//             }
//             )
//         }).then((res) => res.json()).then((resJson) => {
//             checkPermission(resJson).then((ifOk) => {
//                 dispatch(actions.setUser(resJson))
//             })
//             console.log(resJson);
//             if (resJson.contact)
//                 dispatch({ type: "SET_CONTACT", payload: resJson });

//         }).catch((err) => {
//             console.log(err)
//         })

//     }
//     return next(action);
// }
// // export const getU = ({ dispatch, getState }) => next => action => {
// //     if (action.type === 'GET_U') {

// //         // return new Promise((resolve, reject) => {
// //         console.log(configData.SERVER_URL);
// //         $.ajax({
// //             url: configData.SERVER_URL + "getUser/" + userName,
// //             method: "GET",
// //             withCradentials: true,
// //             dataType: "json",
// //             contentType: "application/json",
// //             success: function (data) {
// //                 checkPermission(data.user.uid).then((ifOk) => {
// //                 })
// //                 userId = data.user.uid;
// //                 dispatch({ type: "SET_USERIDM", payload: userId });
// //                 // dispatch({ type: "SET_USER_PHONE", payload: data.user.phone });
// //                 // dispatch({ type: "SET_USER_EMAIL", payload: data.user.email });
// //                 // dispatch({ type: "SET_USER_WEBSITE", payload: data.user.socialmedias.website });
// //                 dispatch({ type: "SET_COMPANY_DETAILS_CALL", payload: data.user.phone ? data.user.phone : "" });
// //                 dispatch({ type: "SET_COMPANY_DETAILS_MAIL2", payload: data.user.email ? data.user.email : "" });
// //                 dispatch({ type: "SET_COMPANY_DETAILS_WEBSITE", payload: data.user.socialmedias ? data.user.socialmedias.websitedata ? data.user.socialmedias.website : "" : "" })
// //                 dispatch({ type: "SET_USER", payload: data });
// //                 dispatch({ type: "CCCC", payload: "jjjjjjjjjj" });

// //                 resolve(true);
// //                 // dispatch({ type: 'GETALL_QUOTE' });

// //             },
// //             error: function (err) { console.log(err); reject(true); }
// //         });


// //         //     reject(true);
// //         // })
// //     }

// // }

// export const changeFromUNToUID = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'CHANGE_UMTOUID') {
//         console.log(configData.SERVER_URL);
//         $.ajax({
//             url: configData.SERVER_URL + "getUser/" + userName,
//             method: "GET",
//             withCradentials: true,
//             dataType: "json",
//             contentType: "application/json",
//             success: function (data) {
//                 checkPermission(data.user.uid).then((ifOk) => {
//                 })
//                 userId = data.user.uid;
//                 dispatch({ type: "SET_USERIDM", payload: userId });
//                 // dispatch({ type: "SET_USER_PHONE", payload: data.user.phone });
//                 // dispatch({ type: "SET_USER_EMAIL", payload: data.user.email });
//                 // dispatch({ type: "SET_USER_WEBSITE", payload: data.user.socialmedias.website });
//                 dispatch({ type: "SET_COMPANY_DETAILS_CALL", payload: data.user.phone ? data.user.phone : "" });
//                 dispatch({ type: "SET_COMPANY_DETAILS_MAIL2", payload: data.user.email ? data.user.email : "" });
//                 dispatch({ type: "SET_COMPANY_DETAILS_WEBSITE", payload: data.user.socialmedias ? data.user.socialmedias.websitedata ? data.user.socialmedias.website : "" : "" })
//                 dispatch({ type: "SET_USER", payload: data });
//                 dispatch({ type: "CCCC", payload: "jjjjjjjjjj" });


//                 // dispatch({ type: 'GETALL_QUOTE' });

//             },
//             error: function (err) { console.log(err) }
//         });
//     }
//     return next(action);
// }



// export const sendEmaillast = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'SEND_EMAILLAST') {
//         // var  jwtFromCookie ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJaWFVCemdNUGxmVzR2TEREbHZpZklpN0ZuNGsyIiwiZW1haWwiOiJhdGFyYUBsZWFkZXIuY29kZXMiLCJpcCI6IjIxMi43Ni4xMDEuMjQ5IiwiaWF0IjoxNjAxMzcwNjc2fQ.k6vKX4m_SNzhMq97QhO7Ox-knonS7mI3QfJccUo-Tr8"
//         console.log(action.payload)

//         // var mailTo = ().contactDetails.contactDetails.email
//         // var mailTo = getState().quote.quote.contactDetailsTo;
//         var mailTo = getState().quote.emailsToSendTemp;
//         var url = window.location;
//         const paperName = (url.href.split('/')[5]);
//         const userName = (url.href.split('/')[4]);
//         var url2 = window.location.href.split('/')[2];
//         var urlView = `http://${url2}/${userName}/${paperName ? paperName : "new"}`
//         fetch(configData.SERVER_URL + userName + '/sendEmaillast', {
//             method: 'POST',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify({ "body": window.location.href.replace("/admin/", "/"), "list": mailTo, "from": userName + "@mail.leader.codes", "subject": paperName ? paperName + "paper to sign" : "new paper to sign" }),
//         })
//             .then((res) => res.json()).then((resJson) => {

//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     return next(action);
// }
// export const sendEmail = ({ dispatch, getState }) => next => action => {


//     if (action.type === 'SEND_EMAIL') {
//         debugger
//         dispatch(actions.setApproachedToServerYesOrNo());
//         console.log(action.payload)
//         var mailTo = getState().quote.emailsToSendTemp;
//         var url = window.location;
//         var paperName1 = action.payload
//         var urlView = `${url.origin}/${userName}/${paperName1 ? paperName1 : paperName ? paperName : "new"}`
//         fetch(configData.SERVER_URL + userName + '/papersToList/' + paperName, {
//             method: 'POST',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify({ "html": getState().managerComponent.managerComponent.bodyMail + "<br/>" + urlView, "emailsToSend": getState().quote.quote.emailsToSend, "to": mailTo, "from": getState().quote.quote.companyDetailsMail2, "subject": getState().managerComponent.managerComponent.subjectMail }),
//         })
//             .then((res) => res.json()).then((resJson) => {
//                 debugger;
//                 dispatch(actions.clearEmailsToSendTemp());
//                 dispatch(actions.setApproachedToServerYesOrNo());
//                 dispatch(actions.setMassageSuccessOrError(true));
//                 dispatch(actions.setMassageSuccessOrOops("Success"));
//                 dispatch(actions.setMassageToShowSuccesOrError("The email sent succefully!"));
//                 checkPermission(resJson).then((ifOk) => {
//                     dispatch(actions.setUser(resJson))
//                 })
//                 console.log(resJson)
//                 console.log("resJson")

//                 dispatch({ type: "SET_ALERTSTATUSE", payload: 5 });
//             })
//             .catch((err) => {
//                 console.log(err)
//                 dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });

//             })
//     }
//     return next(action);
// }
// export const sendEmailPdf = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'SEND_EMAIL_PDF') {
//         // dispatch(actions.setApproachedToServerYesOrNo());

//         // var  jwtFromCookie ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJaWFVCemdNUGxmVzR2TEREbHZpZklpN0ZuNGsyIiwiZW1haWwiOiJhdGFyYUBsZWFkZXIuY29kZXMiLCJpcCI6IjIxMi43Ni4xMDEuMjQ5IiwiaWF0IjoxNjAxMzcwNjc2fQ.k6vKX4m_SNzhMq97QhO7Ox-knonS7mI3QfJccUo-Tr8"
//         console.log(action.payload)
//         //
//         // var mailTo = getState().contactDetails.contactDetails.email
//         // var mailTo = getState().quote.quote.contactDetailsTo;
//         var mailTo = getState().quote.emailsToSendPdf;
//         console.log(mailTo);
//         var url = window.location;
//         var url2 = window.location.href.split('/')[2];
//         var urlView = `${url2}/${userName}/${paperName ? paperName : "new"}`
//         fetch(configData.SERVER_URL + userName + '/papersPdf/' + paperName, {
//             method: 'POST',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },

//             body: JSON.stringify({ "html": urlView, "to": mailTo, "from": "noreply@mail.leader.codes", "subject": paperName ? paperName + "paper to sign" : "new paper to sign" }),
//         })
//             .then((res) => res.json()).then((resJson) => {
//                 // dispatch(actions.setApproachedToServerYesOrNo());
//                 // dispatch(actions.setMassageSuccessOrError(true));
//                 // dispatch(actions.setMassageSuccessOrOops("Success"));
//                 // dispatch(actions.setMassageToShowSuccesOrError("The email sent succefully!"));

//                 checkPermission(resJson).then((ifOk) => {
//                     dispatch(actions.setUser(resJson))
//                 })
//                 console.log(resJson)
//                 console.log("resJson")
//                 dispatch({ type: "SET_ALERTSTATUSE", payload: 5 });
//                 // -----here...
//             })
//             .catch((err) => {
//                 console.log(err)
//                 dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });

//             })
//     }
//     return next(action);
// }
// // export const getProjectByIdInServer = ({ dispatch, getState }) => next => action => {
// //     if (action.type === 'GET_PROJECT_BY_ID_IN_SERVER') {


// //         var projectId = action.payload;

// //         let urlData = `https://reacthub.dev.leader.codes/api/${getState().public_reducer.userName}/${projectId}/getProjectById`

// //         $.ajax({
// //             url: urlData,
// //             type: 'GET',
// //             headers: {
// //                 Authorization: getState().public_reducer.tokenFromCookies
// //             },
// //             contentType: "application/json; charset=utf-8",

// //             success: function (data) {
// //                 dispatch(actions.setProject(data))

// //                 console.log("success")
// //                 console.log("data", data);

// //             },
// //             error: function (err) {

// //                 checkPermission(err).then((ifOk) => {

// //                 })
// //             }
// //         });




// //     }
// //     return next(action);
// // }‏

// export const getAllQuoteFromServer = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GETALL_QUOTE') {
//         userId = getState().managerComponent.managerComponent.userId

//         return fetch(configData.SERVER_URL + userName + '/getAllQuote', {
//             method: 'GET',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//         }).then((res) => res.json()).then((resJson) => {
//             checkPermission(resJson).then((ifOk) => {
//                 dispatch(actions.setUser(resJson))
//             })
//             console.log(resJson);

//             dispatch({ type: "SET_LASTQUOTE", payload: resJson });

//         }).catch((err) => {
//             console.log(err)
//         })

//     }
//     return next(action);
// }

// export const editContactFromServer = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'EDIT_CONTACT') {
//         var contact = getState().contactDetails
//         dispatch({ type: "SET_CONTACTID", payload: getState().managerComponent.managerComponent.contactId });
//         var contactDetails2 = getState().contactDetails
//         console.log(contact, contactDetails2);
//         return fetch(configData.SERVER_URL + userName + '/editContact', {
//             method: 'POST',
//             headers: {
//                 Authorization: TokenToString,
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body:
//                 JSON.stringify(contact)

//         }).then((res) => res.json()).then((resJson) => {
//             checkPermission(resJson).then((ifOk) => {
//                 dispatch(actions.setUser(resJson))
//             })
//             if (resJson.eror) {
//                 dispatch(actions.setMassageToShowSuccesOrError("the data is worng"));
//                 dispatch(actions.setMassageSuccessOrError(true));
//                 dispatch(actions.setMassageSuccessOrOops("Oops"));
//                 // alert("the data is worng");
//             }
//             console.log(resJson);
//             //  console.log(resJson[0].CustomerType);
//             // dispatch({ type: "SET_CONTACT", payload: resJson });
//             dispatch(actions.setContactide(resJson.result._id));
//             dispatch(actions.setDeleteconctact());
//             dispatch(actions.setDeletecontact2());
//             dispatch({ type: "SET_USERID", payload: getState().managerComponent.managerComponent.userId });
//             dispatch({ type: 'GETALL_CONTACT' });
//             contactId = resJson.result._id;
//             dispatch({ type: 'GET_CONTACT' });

//             dispatch(actions.setMassageToShowSuccesOrError("The contact updated!"));
//             dispatch(actions.setMassageSuccessOrError(true));
//             dispatch(actions.setMassageSuccessOrOops("Success"));
//             // alert("the contact updated!");
//             //    this.setState({dataSource:JSON.parse(this.state.dataSource)})
//         }).catch((err) => {
//             console.log(err)
//         })

//     }
//     return next(action);
// }
// export const editQuoteFromServer = ({ dispatch, getState }) => next => action => {
//     let quote = Object.assign({}, getState().quote.quote);
//     if (action.type === 'EDIT_QUOTE') {
//         if (getState().quote.currentName != getState().quote.quote.name) {
//             debugger;
//             dispatch(actions.setNameQ(getState().quote.quote.currentName));
//             return fetch(configData.SERVER_URL + userName + '/editQuote', {
//                 method: 'POST',
//                 headers: {
//                     Authorization: TokenToString,
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body:
//                     JSON.stringify(quote)

//             }).then((res) => {
//                 if (res.status == 409) {
//                     return { status: res.status }
//                 }
//                 else {
//                     return res.json();

//                 }
//             }

//             ).then((resJson) => {
//                 dispatch(actions.setPrevNamePaper(resJson.result.name));
//                 dispatch(actions.setLastUpdateQuote());
//                 if (resJson.status == 409) {
//                     // dispatch(actions.setMassageToShowSuccesOrError("Paper already exist!"));
//                     // dispatch(actions.setMassageSuccessOrError(true));
//                     // dispatch(actions.setMassageSuccessOrOops("Oops"));

//                 }
//                 if (getState().quote.currentName == resJson.result.name) {
//                     history.replace(`/admin/${userName}/${resJson.result.name}`)
//                 }
//                 else {
//                     historyRefresh.replace(`/admin/${userName}/${resJson.result.name}`)

//                 }
//                 dispatch(actions.setUpdateQuoteYOrN(true));
//                 setTimeout(function () {
//                     dispatch(actions.setUpdateQuoteYOrN(false));

//                 }, 3000);
//                 checkPermission(resJson).then((ifOk) => {
//                     // history.replace(`/admin/${userName}/${resJson.result.name}`)
//                 })

//             }).catch((err) => {
//                 console.log(err)
//             })

//         }

//         else {
//             dispatch(actions.setIndexUrls(0));
//             let quill = document.querySelectorAll(".ql-editor");
//             if (quill[0])
//                 dispatch(actions.setQuillStyle(quill[0].innerHTML));
//             // let quote = Object.assign({}, getState().quote.quote);
//             console.log("getState().quote", getState().quote);
//             let urlLogo = getState().quote.logoUrl;
//             quote.logo = urlLogo;
//             let urlPdf = getState().quote.pdfUrl;
//             quote.pdf = urlPdf;
//             // dispatch(actions.setLogo(urlLogo));
//             let urlImage = getState().quote.imageUrl;
//             quote.imageImage = urlImage;
//             // dispatch(actions.setImageImage(urlImage));
//             let urlbusinessSignature = getState().quote.businessSignatureUrl;
//             quote.businessSignature = urlbusinessSignature;
//             // dispatch(actions.setBusinessSignature(urlbusinessSignature));
//             let urldigitalSignature = getState().quote.digitalSignatureUrl;
//             quote.trimmedDataURL = urldigitalSignature;
//             // dispatch(actions.setTrimmedDataURL(urldigitalSignature));
//             console.log(quote);

//             uploadMultiFiles(getState()).then((quill) => {
//                 if (quill)
//                     quote.quillStyle = quill.join('')
//                 return fetch(configData.SERVER_URL + userName + '/editQuote', {
//                     method: 'POST',
//                     headers: {
//                         Authorization: TokenToString,
//                         Accept: 'application/json',
//                         'Content-Type': 'application/json'
//                     },
//                     body:
//                         JSON.stringify(quote)

//                 }).then((res) => {
//                     if (res.status == 409) {
//                         return { status: res.status }
//                     }
//                     else {
//                         return res.json();

//                     }
//                 }

//                 ).then((resJson) => {
//                     dispatch(actions.setPrevNamePaper(resJson.result.name));
//                     dispatch(actions.setLastUpdateQuote());
//                     debugger;
//                     if (resJson.status == 409) {
//                         // dispatch(actions.setMassageToShowSuccesOrError("Paper already exist!"));
//                         // dispatch(actions.setMassageSuccessOrError(true));
//                         // dispatch(actions.setMassageSuccessOrOops("Oops"));

//                     }
//                     if (getState().quote.currentName == resJson.result.name) {
//                         history.replace(`/admin/${userName}/${resJson.result.name}`)
//                     }
//                     else {
//                         historyRefresh.replace(`/admin/${userName}/${resJson.result.name}`)

//                     }
//                     dispatch(actions.setUpdateQuoteYOrN(true));
//                     setTimeout

//                 }
            