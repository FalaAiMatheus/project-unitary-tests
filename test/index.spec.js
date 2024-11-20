import { expect, test } from "vitest";
import User from "../src";

const user = new User();

test("create user", async () => {
  const user = new User();
  const result = await user.save(
    1,
    "Matheus",
    "matheus@example.com",
    "1998-02-11",
    "01001000"
  );
  expect(result).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.any(String),
      yearsOld: expect.any(String),
      dtNascimento: expect.any(String),
      address: expect.objectContaining({
        logradouro: expect.any(String),
        bairro: expect.any(String),
        estado: expect.any(String),
      }),
      save: expect.any(Function),
      saveAddress: expect.any(Function),
    })
  );
});
