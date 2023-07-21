import { token } from "@/utils/token";

export default async function topUp(iccid: string, customer_id: string, package_type_id: string) {
  try {
    const res = await fetch(
      "https://test.esimplified.io/customer/esimpalace/api/top_up_esim/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
            iccid,
            customer_id,
            package_type_id
        }),
      }
    );
    if (res.ok === false) throw res.statusText
    return true;
  } catch (error) {
    return false;
  }
}
