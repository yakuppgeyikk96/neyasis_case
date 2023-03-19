import makeRequest from "@/utils/makeRequest";

export async function getProfile() {
  const response = await makeRequest({
    url: "/profile",
    method: "GET"
  });

  return response.data;
}

export async function getPersonalInfos() {
  const response = await makeRequest({
    url: "/personalInfos",
    method: "GET"
  });

  return response.data;
}