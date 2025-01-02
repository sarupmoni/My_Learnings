const getDomain = (emails) => {
  const regex = /@(\w+)\./;
  const domains = emails
    .filter((email) => email.match(regex))
    .map((email) => email.match(regex)[1]);

  return domains;
};

console.log(getDomain(["s@gmail.com", "@yahoo.com", "gmail.", "@gmail"]));
