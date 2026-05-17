import axios from "axios";

const API = "http://localhost:8000/appointments";

export const createAppointment = async (data: {
  patientName: string;
  phone: string;
  specialization: string;
}) => {
  const res = await axios.post(API, data);
  return res.data;
};

export const getTodayQueue = async () => {
  try {
    const res = await axios.get(`${API}/queue/today?t=${Date.now()}`)
    return res.data
  } catch (err) {
    console.error("QUEUE API ERROR:", err)
    throw err
  }
}

export const updateAppointmentStatus = async (
  id: string,
  status: string
) => {
  const res = await axios.patch(`${API}/${id}/status`, {
    status,
  })

  return res.data
}
