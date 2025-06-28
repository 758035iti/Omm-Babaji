/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  agarbati,
  chandan,
  diya1,
  haldi,
  kalash,
  kumkum,
} from "@/assets/login";

// Reusable Modal Component
function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default function Panel() {
  const [activeTab, setActiveTab] = useState("brahmin");
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedBrahmin, setSelectedBrahmin] = useState<any>(null);
  type Brahmin = {
    id: number;
    firstName?: string;
    phoneNumber?: string;
    experienceCategory?: string;
    experienceDetails?: string;
    name?: string;
    dob?: string;
    gotra?: string;
    specialization?: string;
    experience?: string;
    pujaList?: string;
    // Add other fields as needed
  };
  const [brahminList, setBrahminList] = useState<Brahmin[]>([]);
  const [selectedYajman, setSelectedYajman] = useState<any>(null);
  const [yajmanModalOpen, setYajmanModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const [editableUserId, setEditableUserId] = useState(0);

  const router = useRouter();

  const fetchBrahmin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4002/api/brahmin/getall`
      );
      setBrahminList(response.data); // Store data in a dedicated state
    } catch (error) {
      console.error("Error fetching brahmins:", (error as any).message);
    }
  };

  const fetchYajman = async () => {
    try {
      const response = await axios.get(`http://localhost:4002/api/User/getall`);
      setSelectedYajman(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.error("Error fetching users:", error.message);
    }
  };
  useEffect(() => {
    fetchYajman();
    fetchBrahmin();
  }, []);

  // const pujaSamagri = ["Kalash", "Kumkum", "Haldi"];

  const orders = [
    {
      id: 12345,
      yajman: "Ramesh Yadav",
      puja: "Satyanarayan Puja",
      amount: 1500,
      status: "Pending",
    },
  ];

  const handleLogout = () => {
    // You can also clear cookies/localStorage/session here
    router.push("/login"); // redirect to login page
  };

  const handleEditUser = (id: number) => {
    setEditableUserId(id);
  };
  //delete yajman
  const handleDelete = async (user_id: number) => {
    console.log("selectedYajman list:", selectedYajman);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No auth token found.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:4002/api/User/delete_by_userid/${user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status) {
        setSelectedYajman((data: any[]) =>
          data.filter((user) => user.id !== user_id)
        );
      }
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Unknown error";
      console.error("Delete error:", errorMessage);
    }
  };
  //delete brahmin
  const handleDeleteBrahmin = async (brahmin_id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Brahmin?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    if (!token) {
      alert("User is not authenticated");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:4002/api/brahmin/${brahmin_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Brahmin deleted successfully.");
        // Optionally update the UI
        // Remove from frontend list immediately
        setBrahminList((prev) =>
          prev.filter((brahmin) => brahmin.id !== brahmin_id)
        );
      }
    } catch (error) {
      console.error("Failed to delete Brahmin:", error);
      alert("Something went wrong while deleting. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-red-600 to-pink-400 text-white border-r shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Admin Panel
        </h2>
        <nav className="space-y-3 text-white">
          <button
            onClick={() => setActiveTab("brahmin")}
            className={tabStyle(activeTab === "brahmin")}
          >
            Brahmin
          </button>
          <button
            onClick={() => setActiveTab("yajman")}
            className={tabStyle(activeTab === "yajman")}
          >
            Yajman
          </button>
          <button
            onClick={() => setActiveTab("orderList")}
            className={tabStyle(activeTab === "orderList")}
          >
            Order List
          </button>
          <button
            onClick={() => setActiveTab("pujaSamagri")}
            className={tabStyle(activeTab === "pujaSamagri")}
          >
            Puja Samagri
          </button>

          <hr className="my-3" />
          <button
            onClick={() => setActiveTab("settings")}
            className={tabStyle(activeTab === "settings")}
          >
            ⚙ Settings
          </button>
          <button
            onClick={() => setLogoutModalOpen(true)}
            className={tabStyle(false)}
          >
            🔒 Logout
          </button>
        </nav>
      </aside>

      {/* Main Content Panel */}
      <main className="flex-1 p-6 pl-10">
        {/* Brahmin Section */}
        {activeTab === "brahmin" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Brahmin Register</h2>
            <div className="overflow-x-auto bg-white rounded shadow">
              <table className="w-full text-sm border">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2">ID</th>
                    <th className="p-2">Name</th>

                    <th className="p-2">phone Number</th>
                    <th className="p-2">Specialization</th>
                    <th className="p-2">Experience</th>
                    <th className="p-2">Actions</th>
                    <th className="p-2">View</th>
                  </tr>
                </thead>
                <tbody>
                  {brahminList.map((b: any) => (
                    <tr
                      key={b.brahmin_id}
                      className="border-t hover:bg-gray-50 text-center"
                    >
                      <td className="p-2">{b.brahmin_id}</td>
                      <td className="p-2">{b.firstName}</td>
                      <td className="p-2">{b.phoneNumber}</td>
                      <td className="p-2">{b.experienceCategory}</td>
                      <td className="p-2">{b.experienceDetails}</td>
                      <td className="p-2 space-x-2">
                        <button className="text-blue-600 hover:underline">
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBrahmin(b.brahmin_id)}
                          className="text-red-600 hover:underline"
                        >
                          De-Activate
                        </button>
                      </td>
                      <td className="p-2">
                        <button
                          onClick={() => {
                            setSelectedBrahmin(b);
                            setModalOpen(true);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Brahmin Details"
            >
              {selectedBrahmin && (
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>ID:</strong> {selectedBrahmin.brahmin_id}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedBrahmin.name}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {selectedBrahmin.dob}
                  </p>
                  <p>
                    <strong>Gotra:</strong> {selectedBrahmin.gotra}
                  </p>
                  <p>
                    <strong>Specialization:</strong>{" "}
                    {selectedBrahmin.specialization}
                  </p>
                  <p>
                    <strong>Experience:</strong> {selectedBrahmin.experience}
                  </p>
                  <p>
                    <strong>Puja List:</strong> {selectedBrahmin.pujaList}
                  </p>
                </div>
              )}
            </Modal>
          </section>
        )}

        {/* Yajman Section */}
        {activeTab === "yajman" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Yajman Register</h2>
            <div className="overflow-x-auto bg-white rounded shadow">
              <table className="w-full text-sm border">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2">ID</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Phone</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Actions</th>
                    <th className="p-2">View</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(selectedYajman) &&
                    selectedYajman.map((y: any) => (
                      <tr
                        key={y.user_id}
                        className="border-t hover:bg-gray-50 text-center min-h-8"
                      >
                        <td className="p-2">
                          <input type="text" value={y.id} disabled={true} />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={y.fullName}
                            disabled={y.user_id !== editableUserId}
                            className={`${
                              y.user_id !== editableUserId
                                ? "p-1.5 "
                                : "border-2 rounded-md bg-gray-200  p-1.5"
                            }`}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={y.phoneNumber}
                            disabled={y.user_id !== editableUserId}
                            className={`${
                              y.user_id !== editableUserId
                                ? "p-1.5 "
                                : "border-2 rounded-md bg-gray-200  p-1.5"
                            }`}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            value={y.email}
                            disabled={y.user_id !== editableUserId}
                            className={`${
                              y.user_id !== editableUserId
                                ? "p-1.5 "
                                : "border-2 rounded-md bg-gray-200  p-1.5"
                            }`}
                          />
                        </td>
                        <td className="p-2 space-x-2">
                          <button
                            className="text-blue-600 hover:underline"
                            onClick={() => handleEditUser(y.user_id)}
                          ></button>
                          <button
                            className="text-red-600 hover:underline"
                            onClick={() => handleDelete(y.user_id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td className="p-2">
                          <button
                            onClick={() => {
                              setSelectedYajman(y);
                              setYajmanModalOpen(true);
                            }}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Eye size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <Modal
              isOpen={yajmanModalOpen}
              onClose={() => setYajmanModalOpen(false)}
              title="Yajman Details"
            >
              {selectedYajman && (
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>ID:</strong> {selectedYajman.user_id}
                  </p>
                  <p>
                    <strong>Name:</strong> {selectedYajman.fullName}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedYajman.phoneNumber}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedYajman.email}
                  </p>
                </div>
              )}
            </Modal>
          </section>
        )}

        {/* Puja Samagri */}
        {activeTab === "pujaSamagri" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">🧺 Puja Samagri</h2>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
              {[
                {
                  name: "Kumkum",
                  image: kumkum,
                  description:
                    "Used in tilak and rituals, representing purity and energy.",
                },
                {
                  name: "Haldi (Turmeric)",
                  image: haldi,
                  description:
                    "Symbol of prosperity and is used in holy ceremonies.",
                },
                {
                  name: "Chandan (Sandalwood Powder)",
                  image: chandan,
                  description:
                    "Applied during puja for its cooling and sacred properties.",
                },
                {
                  name: "Agarbatti (Incense Sticks)",
                  image: agarbati,
                  description:
                    "Used to purify the surroundings and invite positivity.",
                },
                {
                  name: "Diya (Oil Lamp)",
                  image: diya1,
                  description:
                    "Represents light and knowledge, used in every puja.",
                },
                {
                  name: "Kalash (Sacred Pot)",
                  image: kalash,
                  description:
                    "Symbol of abundance and is placed at the beginning of puja.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded shadow-md border border-gray-200 hover:shadow-lg transition justify-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-[50%]  h-[50%] object-cover rounded mb-3  "
                    height={100}
                    width={100}
                  />
                  <h3 className="text-md font-semibold text-green-700">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Order List */}
        {activeTab === "orderList" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Order List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                  <p className="text-sm mt-1">
                    <strong>Yajman:</strong> {order.yajman}
                  </p>
                  <p className="text-sm">
                    <strong>Puja:</strong> {order.puja}
                  </p>
                  <p className="text-sm">
                    <strong>Amount:</strong> ₹{order.amount}
                  </p>
                  <p className="text-sm">
                    <strong>Status:</strong>{" "}
                    <span className="text-yellow-600 font-medium">
                      {order.status}
                    </span>
                  </p>
                  <p className="text-sm mt-2 bg-yellow-50 border border-yellow-300 p-2 rounded">
                    ⏳ Awaiting confirmation from Admin.
                  </p>
                  <div className="flex justify-end mt-4 space-x-2">
                    <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Settings Section */}
        {activeTab === "settings" && (
          <section className="max-w-xl bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">⚙ Settings</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700">
                  Admin Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full mt-1 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Change Password
                </label>
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full mt-1 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Update Settings
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Logout Confirmation Modal */}
        <Modal
          isOpen={logoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          title="Confirm Logout"
        >
          <p className="mb-4">Are you sure you want to log out?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setLogoutModalOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <Link href="/">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            </Link>
          </div>
        </Modal>
      </main>
    </div>
  );
}

// Utility for styling active/inactive tabs
function tabStyle(isActive: boolean) {
  return `w-full text-left px-4 py-2 rounded-md transition ${
    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
  }`;
}
