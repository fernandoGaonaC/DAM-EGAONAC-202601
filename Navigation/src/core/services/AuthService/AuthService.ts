import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";

const AuthService = {
  register: async (user: User): Promise<User> => {
    const userExist = await UserRepository.findByUsername(user.username);
    if (userExist) {
      console.error(`Usuario con el username: ${user.username}, ya existe`);
      throw new Error("El usuario ya existe");
    }

    const id = await UserRepository.create(user);
    if (id === undefined) {
      throw new Error("El usuario no se pudo crear");
    }
    const newUser: User = { ...user, id };
    await AuthRepository.save(newUser);
    return newUser;
  },
    login: async (username: string, password: string) => {
    const user = await UserRepository.findByUsername(username);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (user.contrasena !== password) {
      throw new Error("Contraseña incorrecta");
    }
    return user;
  },
};

export default AuthService;
