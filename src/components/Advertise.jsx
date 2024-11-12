import React, { useEffect, useState } from "react"

export default function Advertise() {
  const [addData, setAddData] = useState("Testing")

  useEffect(() => {
    const link = "https://api.quotable.io/random"

    const fetchData = async () => {
      const response = await fetch(link)
      const data = await response.json()
      setAddData(data)
      // console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div  className="m-4 h-auto align-items-center p-4 gap-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
      <div>
      {addData.content}
      
      </div>
      <footer className="flex justify-end">
        By - {addData.author}
      </footer>
    </div>
  )
}
