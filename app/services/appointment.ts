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
  const res = await axios.get(`${API}/queue/today`)
  return res.data
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
