"sarupmoni@gmail.com".match();
const domainCheck = (emails) => {
  const regex = /^\w+@\w+\.com$/;

  return emails.filter((email) => regex.test(email));
};

console.log(
  domainCheck(["s@g.com", "9@.com", "9@0.com", "d.com", "s@g.in", "3@.coms"])
);
