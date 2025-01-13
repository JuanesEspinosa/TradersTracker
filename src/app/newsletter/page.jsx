const Newsletter = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col w-72 gap-4">
        <h1 className="text-4xl font-bold">Newsletter</h1>
        <input type="text" placeholder="Email" className="w-full border-2 border-gray-300 outline-none p-2 rounded-md" />
        <button className="bg-blue-500 text-white p-2 rounded-md">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter

