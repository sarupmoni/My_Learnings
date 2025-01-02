const ipv4 = (ips) => {
  const regex = /^(\d{1,3}.){3}\d{1,3}$/;

  return ips.filter((ip) => regex.test(ip));
};

console.log(
  ipv4(["123.123.123.123", "999.999.999.999", "1000.1.1.1", "22.22.22.22"])
);
