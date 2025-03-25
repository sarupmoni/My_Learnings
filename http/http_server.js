const replaceContent = (url) => {
  const params = url.searchParams;
  console.log(params);

  const symbolList = Object.getOwnPropertySymbols(params)[0];
  const [values] = params[symbolList];
  const [name, color] = [...values];

  const file = Deno.readFileSync(`.${url.pathname}`);
  let content = new TextDecoder().decode(file);
  content = content.replaceAll("<% name %>", name);
  content = content.replaceAll("<% color %>", color);
  return content;
};

const handleIndexHtml = (url) => {
  const content = replaceContent(url);

  return new Response(content, {
    headers: {
      "content-Type": "text/html",
    },
  });
};

const handleNotFound = () => {
  return new Response("Not Found", {
    headers: {
      "content-type": "text/plain",
    },
    status: 404,
  });
};

const handler = (req) => {
  const url = new URL(req.url);

  try {
    if (url.pathname === "/index.html") {
      return handleIndexHtml(url);
    }
    return handleNotFound();
  } catch (error) {
    err;
  }
};

Deno.serve({ port: 9000 }, handler);
