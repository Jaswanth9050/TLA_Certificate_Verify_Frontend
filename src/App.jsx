// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShieldCheck, XCircle } from "lucide-react";
// // import { api } from "@/api/axios";
// import {api} from "../src/api/axios"
// // import logo from "@/assets/TLA_Logo3.png";
// import logo from "../src/assets/TLA_Logo3.png";

// export default function App() {
//   const { certificateId } = useParams();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchCert = async () => {
//       try {
//         const res = await api.get(`/certificate/${certificateId}`);
//         if (res.data.ok) setData(res.data);
//         else setError(true);
//       } catch {
//         setError(true);
//       }
//     };
//     fetchCert();
//   }, [certificateId]);

//   return (
//     <>
//       <VerificationHeader />

//       <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-start justify-center px-4 pt-40 sm:pt-36">
//         <div className="bg-white max-w-xl w-full rounded-3xl shadow-2xl p-6 sm:p-10 text-center space-y-6 animate-fadeIn mb-3">
//           {data && (
//             <>
//               <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto" />
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 Certificate Verified Successfully
//               </h1>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 This certificate is valid and confirms successful course completion.
//               </p>

//               <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 text-left space-y-3 sm:space-y-4 border">
//                 <InfoRow label="Certificate ID" value={data.certId} />
//                 <InfoRow label="Student ID" value={data.studentId} />
//                 <InfoRow label="Issued To" value={data.name} />
//                 <InfoRow label="Issued By" value={data.company} />
//                 <InfoRow label="Issued At" value={data.issuedAt} />
//                 <InfoRow label="Instructor" value={data.instructor} />
//                 <InfoRow label="Course Title" value={data.course} />
//                 <InfoRow
//                   label="Status"
//                   value={
//                     data.status === "completed"
//                       ? "Completed Successfully"
//                       : data.status === "pending"
//                       ? "Pending Courses"
//                       : "Invalid"
//                   }
//                   success={data.status === "completed"}
//                 />
//               </div>

//               <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-4">
//                 ✔ The above candidate has officially completed the course requirements.
//               </p>
//             </>
//           )}

//           {error && (
//             <>
//               <XCircle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 mx-auto" />
//               <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//                 Certificate Not Found
//               </h1>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 This certificate ID is invalid or does not exist.
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// // Info Row Component
// function InfoRow({ label, value, success }) {
//   let color = "text-gray-900";
//   if (success) color = "text-green-600";

//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//       <span className="text-sm sm:text-sm text-gray-500">{label}</span>
//       <span className={`font-semibold mt-1 sm:mt-0 ${color}`}>{value || "—"}</span>
//     </div>
//   );
// }

// // Verification Header Component
// const VerificationHeader = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
//         {/* LEFT — LOGO + BRAND */}
//         <div className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Terralogic Academy"
//             className="h-10 sm:h-12 w-auto drop-shadow-sm"
//           />
//           <div>
//             <p className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
//               Terralogic <span className="text-orange-600">Academy</span>
//             </p>
//             <p className="text-xs sm:text-sm text-gray-500 -mt-1">
//               Official Certificate Verification Portal
//             </p>
//           </div>
//         </div>

//         {/* RIGHT — TRUST BADGE */}
//         <div className="flex items-center gap-2 sm:gap-3 bg-orange-50 text-orange-700 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
//           <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse" />
//           Secure & Verified Portal
//         </div>
//       </div>
//     </header>
//   );
// };

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VerificationPage from './Verfication_page'

const App = () => {
  return (
    <Routes>
      <Route path="/verify/:certificateId" element={<VerificationPage />} />
    </Routes>
  )
}

export default App