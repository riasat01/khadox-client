import Link from "next/link";


const SignUpPage = () => {
    return (
        <div className="my-24">
            <form className="md:mx-auto px-8 md:px-0 w-full md:w-2/3 lg:w-1/2 space-y-4">
                <h1 className="w-full text-4xl text-white font-bold text-center py-8 bg-gradient-to-tr from-blue-700 to-blue-900 rounded-xl">Sign Up</h1>
                <input className="w-full p-2 rounded-xl bg-transparent border-2" type="text" name="name" placeholder="Name" id="" />
                <input className="w-full p-2 rounded-xl bg-transparent border-2" type="text" name="photoURL" placeholder="Photo URL" id="" />
                <input className="w-full p-2 rounded-xl bg-transparent border-2" type="email" name="email" placeholder="Email" id="" />
                <input className="w-full p-2 rounded-xl bg-transparent border-2" type="password" name="password" placeholder="Password" id="" />
                <input className="w-full hover:m-1 p-2 text-white font-medium rounded-xl bg-gradient-to-tr from-blue-700 to-blue-900 hover:from-blue-900 hover:to-blue-950" type="button" value="Sign Up" />
            </form>
            <p className="mt-4 md:mx-auto px-8 md:px-0 w-full md:w-2/3 lg:w-1/2">Already have an account? <Link href='/login' className="text-transparent bg-gradient-to-tr from-blue-700 to-blue-900 bg-clip-text font-semibold ">Please login</Link></p>
        </div>
    );
};

export default SignUpPage;