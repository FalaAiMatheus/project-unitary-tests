import User from "./entites/User";

const user = new User();

const userInfos = async () => {
  const save = await user.save(
    1,
    "Matheus",
    "matheus@example.com",
    "1998-02-12",
    "60040520"
  );
  console.log(save);
};

userInfos();
