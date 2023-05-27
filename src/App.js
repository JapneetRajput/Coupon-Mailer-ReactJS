import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [recipient, setRecipient] = useState("");
  // const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponse("");
    let mailBody = "";

    if (recipient.includes("yashvi")) {
      switch (code) {
        case "Maafi":
          // Handle 'Maafi' case
          mailBody = "Get Maafi for anything you've done! \n 1 use only";
          setResponse(mailBody);
          try {
            const response = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await response.text();
            setResponse(data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        case "Unlimited Hugs and Kisses":
          // Handle 'Unlimited HK' case
          mailBody = "Unlimited Hugs and Kisses \n Unlimited use";
          setResponse(mailBody);
          try {
            const response = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await response.text();
            setResponse(data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        case "Open book":
          // Handle 'Open book' case
          mailBody = "For the times I am not an open book \n Unlimited use";
          setResponse(mailBody);
          try {
            const response = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await response.text();
            setResponse(data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        case "all yours":
          // Handle 'all yours' case
          mailBody =
            "For those days when you need a lil extra attention \n All yours toh I am hi ;) \n Unlimited use";
          setResponse(mailBody);
          try {
            const response = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await response.text();
            setResponse(data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        case ";)":
          // Handle ';)' case
          mailBody = "Well I think you know what this means \n Unlimited use";
          setResponse(mailBody);
          try {
            const response = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await response.text();
            setResponse(data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        case "Boss":
          // Handle 'Boss' case
          mailBody =
            "1 day of everything you want to do (EVERYTHING) \n Can be used twice";
          setResponse(mailBody);
          try {
            const response = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await response.text();
            setResponse(response + data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        case "Come over":
          // Handle 'Come over' case
          mailBody =
            "Any (reasonable) time of the day you call, I will be there";
          setResponse(mailBody);
          try {
            const responses = await fetch(
              "https://coupon-mailer-express-t9vo.vercel.app/send-email",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, recipient, mailBody }),
              }
            );

            const data = await responses.text();
            // setResponse(response + data);
          } catch (error) {
            console.error(error);
            setResponse("An error occurred while sending the email.");
          }
          break;
        default:
          // Handle default case
          setResponse("Incorrect code. Please try again");
          break;
      }
    } else {
      setResponse("Mails can only be sent to Yashvi Dhar");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="w-full max-w-lg flex flex-col px-16 sm:px-0"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row items-center">
          <h1 className="text-lg font-bold pb-12">
            Happy Birthday Yashvi ✨❤️!
          </h1>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="recipient">
            Recipient:
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="email"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        {/* <div className="mb-4">
          <label className="block mb-2" htmlFor="subject">
            Subject:
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div> */}
        <div className="mb-4">
          <label className="block mb-2" htmlFor="text">
            Code:
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Email"}
        </button>
        {response && (
          <div className="mt-4 p-4 bg-gray-200 rounded">{response}</div>
        )}
      </form>
    </div>
  );
}

export default App;
