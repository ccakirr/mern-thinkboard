import { useEffect } from "react";
import Navbar from "../components/Navbar";
import RateLimited from "../components/RateLimited";
import { useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes", error);
        if (Number(error?.response?.status) === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      {isRateLimited && <RateLimited />}
      <div className="max-w-7xl mx-auto p-4 mt-3">
        {loading && (
          <div className="text-center flex justify-center text-primary py-10 gap-2">
            <Loader2 />
            Loading Notes...
          </div>
        )}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
