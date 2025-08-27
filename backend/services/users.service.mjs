import supabase from "../config/supabase.mjs";

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*');

      if (error) throw error;

      resolve({ rows: data });
    } catch (err) {
      reject(err);
    }
  });
};

export const getUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      resolve({ rows: [data] });
    } catch (err) {
      reject(err);
    }
  });
};

export const createUser = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { id, email, password, fullname, address, number } = user;

      // Create a user object with only the defined properties
      const userData = {
        id,
        email,
        password,
        fullname
      };

      // Add optional fields if they exist
      if (address !== undefined) {
        userData.address = address;
      }

      if (number !== undefined) {
        userData.number = number;
      }

      const { error } = await supabase
        .from('users')
        .insert([userData]);

      if (error) throw error;

      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const updateUser = (id, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, password, fullname, address, number } = user;

      const { error } = await supabase
        .from('users')
        .update({
          email,
          password,
          fullname,
          address,
          number
        })
        .eq('id', id);

      if (error) throw error;

      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { error } = await supabase
        .from('users')
        .delete()
        .eq('id', id);

      if (error) throw error;

      resolve();
    } catch (err) {
      reject(err);
    }
  });
};
