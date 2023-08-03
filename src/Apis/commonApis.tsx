export const fetch2 = async (api: any, body: any) => {
  if (body) {
    let entries = Object.keys(body);
    let data = new FormData();
    for (let i = 0; i < entries.length; i++) {
      data.append(entries[i], body[entries[i]]);
    }
    const res = await fetch(api, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  } else {
    const res = await fetch(api, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    });
    return await res.json();
  }
};

export const fetch3 = async (api: any, type: any) => {
  const res = await fetch(api, {
    method: type,
    headers: {
      "content-type": "application/json",
    },
  });
  return await res.json();
};

export const fetch4 = async (api: any, body: any) => {
  if (body) {
    const res = await fetch(api, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } else {
    const res = await fetch(api, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    });
    return await res.json();
  }
};
