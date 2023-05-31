import { IMilk, IMilkDto } from "../helper/models";

const BASE_URL = `http://localhost:8080/api/milks`;

export async function getMilks() {
   const apiResponse = await fetch(BASE_URL, { cache: 'no-store' });
   const data = await apiResponse.json();
  return data;
};

export async function getMilk(id: string) {
  const milkUrl = BASE_URL + `/${id}`;
  const apiResponse = await fetch(milkUrl, { cache: 'no-store' });
  const data = await apiResponse.json();
 return data;
}

export async function addMilk(milk: IMilkDto) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(milk),
    headers: {
      "content-type": "application/json",
    },
  });
  const json = (await response.json()) as { addedMilk: IMilk };
  return json;
};

export async function updateMilk(milk: IMilk) {
  const id = milk.id
  const puppyUrl = BASE_URL + `/${id}`;
  const response = await fetch(puppyUrl, {
    method: "PUT",
    body: JSON.stringify(milk),
    headers: {
      "content-type": "application/json",
    },  });
  const json = (await response.json()) as { addedMilk: IMilkDto };
  console.log("json: ", json);
  return json;
}; 