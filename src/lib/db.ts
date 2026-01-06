export interface User {
  name: string;
  email: string;
  password: string; 
}

const DB_KEY = 'bright_connect_users';

export const db = {
  getUsers: (): User[] => {
    try {
      const users = localStorage.getItem(DB_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error("Database error:", error);
      return [];
    }
  },

  addUser: (user: User): { success: boolean; message: string } => {
    try {
      const users = db.getUsers();
      if (users.some(u => u.email === user.email)) {
        return { success: false, message: "User with this email already exists." };
      }
      users.push(user);
      localStorage.setItem(DB_KEY, JSON.stringify(users));
      return { success: true, message: "Account created successfully!" };
    } catch (error) {
      return { success: false, message: "Failed to save user." };
    }
  },

  verifyUser: (email: string, password: string): { success: boolean; user?: User; message: string } => {
    const users = db.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      return { success: true, user, message: "Login successful!" };
    }
    
    // Check if email exists but wrong password
    if (users.some(u => u.email === email)) {
      return { success: false, message: "Invalid password." };
    }
    
    return { success: false, message: "User not found. Please sign up." };
  }
};
