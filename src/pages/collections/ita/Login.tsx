import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle login logic
  };

  return (
    <div className="relative min-h-screen bg-[#0e223c] text-white flex flex-col items-center justify-center px-4 py-8">
      <p className="text-xl sm:text-2xl absolute top-4 left-4 md:top-8 md:left-8 font-bold">
        SERVICE AREA
      </p>

      <div className="text-center max-w-2xl mb-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Welcome to Elba Service Area
        </p>
        <p className="text-sm sm:text-base text-gray-300">
          This is a restricted website for authorized Dealers and Service Companies.
        </p>
      </div>

      <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row bg-white text-black shadow-lg rounded-lg overflow-hidden">
        {/* Login Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="uppercase text-sm font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Dato necessario" })}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500 bg-red-100" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Dato necessario" })}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? "border-red-500 bg-red-100" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
              <button
                type="submit"
                className="text-white py-3 px-6 font-semibold bg-[#0b1b30] hover:bg-[#122e50] transition rounded"
              >
                LOGIN
              </button>
              <a href="#" className="text-sm underline text-blue-600 hover:text-blue-800">
                Recupero password
              </a>
            </div>
          </form>
        </div>

        {/* Right Info Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 bg-[#0e223c] text-white">
          <h2 className="uppercase text-sm font-bold mb-4">Non ancora registrato?</h2>
          <p className="mb-2 text-sm sm:text-base">
            Per accedere nell'area riservata, devi essere un cliente della Elba Italy Spa.
          </p>
          <p className="mb-4 text-sm sm:text-base">
            Per la registrazione e ricevere le credenziali,{" "}
            <a href="#" className="underline text-blue-300 hover:text-blue-500">
              clicca qui
            </a>
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Elba Italy Spa si riserva il diritto di aggiornare e modificare le informazioni senza preavviso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;