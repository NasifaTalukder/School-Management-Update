const Login = () => (
  <div className="bg-white p-4 rounded-lg mt-8 h-[250px] shadow-md">
    <h2 className="text-lg font-bold mb-2">Login</h2>
    <input type="text" placeholder="Username" className="border p-2 w-full mb-2" />
    <input type="password" placeholder="Password" className="border p-2 w-full mb-2" />
    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Login</button>
  </div>
);

export default Login;