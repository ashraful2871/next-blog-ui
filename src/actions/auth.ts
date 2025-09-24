"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("user registration failed", await res.text());
  }
  return await res.json();
};
export const login = async (data: FieldValues) => {
  console.log(data);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("user login failed", await res.text());
  }
  return await res.json();
};
