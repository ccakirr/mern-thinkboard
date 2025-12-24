import { useEffect, useState } from "react";
import api from "axios";
import { useNavigate, useParams, Link } from "react-router";
import toast from "react-hot-toast";
import { ArrowLeftIcon, Loader2, Trash2Icon } from "lucide-react";

const NoteDetailsPage = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`http://localhost:3000/api/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!note.title.trim() || !note.content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setSaving(true);

    try {
      await api.put(`http://localhost:3000/api/notes/${id}`, note);

      toast.success("Note updated successfully.");
      navigate("/");
    } catch (error) {
      if (error?.response?.status === 429) {
        toast.error("Slow down! You're editing too fast 💀");
      } else {
        toast.error("Failed to update note");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if(!window.confirm("Are you sure to delete that note?")) return;

    try {
      await api.delete(`http://localhost:3000/api/notes/${id}`)
      toast.success("Note deleted")
      navigate("/")
    } catch (error) {
      if(error?.response?.status === 429)
      {
        toast.error("Please try again later")
      } else {
        toast.error("Failed to delete note")
        console.log("Error at delete note")
      }
    }
  }

  if (loading)
    return (
      <div className="text-center flex justify-center text-primary py-10 gap-2">
        <Loader2 />
        Loading Notes...
      </div>
    );


  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link to="/" className="gap-2 btn btn-ghost mb-6">
              <ArrowLeftIcon className="size-5" />
              <span className="text-sm font-semibold">Back to notes</span>
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={note.title}
                    onChange={(e) =>
                      setNote({ ...note, title: e.target.value })
                    }
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    value={note.content}
                    onChange={(e) =>
                      setNote({ ...note, content: e.target.value })
                    }
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={saving}
                  >
                    {saving ? "Saving…" : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsPage;
