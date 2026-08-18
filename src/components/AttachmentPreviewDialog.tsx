import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

export interface PreviewableAttachment {
  file_name: string;
  storage_path: string;
  mime_type: string | null;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  attachment: PreviewableAttachment | null;
}

export function AttachmentPreviewDialog({ open, onOpenChange, attachment }: Props) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open || !attachment) return;

    let active = true;
    let nextBlobUrl: string | null = null;

    setLoading(true);
    setError(null);

    (async () => {
      const { data, error } = await supabase.storage.from("task-attachments").download(attachment.storage_path);

      if (!active) return;

      if (error) {
        setError(error.message);
        setBlobUrl(null);
        setLoading(false);
        return;
      }

      nextBlobUrl = URL.createObjectURL(data);
      setBlobUrl(nextBlobUrl);
      setLoading(false);
    })();

    return () => {
      active = false;
      if (nextBlobUrl) URL.revokeObjectURL(nextBlobUrl);
    };
  }, [open, attachment]);

  const downloadCurrent = async () => {
    if (!attachment) return;

    try {
      const { data, error } = await supabase.storage.from("task-attachments").download(attachment.storage_path);
      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = attachment.file_name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30_000);
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  const mime = attachment?.mime_type ?? "";
  const isImage = mime.startsWith("image/");
  const isVideo = mime.startsWith("video/");
  const isAudio = mime.startsWith("audio/");
  const isPdf = mime === "application/pdf" || mime.includes("pdf");
  const isText = mime.startsWith("text/") || mime.includes("json");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-5xl overflow-hidden p-0">
        <DialogHeader className="border-b px-6 py-4">
          <div className="flex items-center justify-between gap-3">
            <DialogTitle className="truncate text-sm">{attachment?.file_name ?? "Visualizar arquivo"}</DialogTitle>
            <Button type="button" variant="outline" size="sm" onClick={downloadCurrent} disabled={!attachment}>
              <Download className="mr-2 h-4 w-4" />Baixar
            </Button>
          </div>
        </DialogHeader>

        <div className="flex min-h-[60vh] items-center justify-center bg-muted/20 p-4">
          {loading && <p className="text-sm text-muted-foreground">Carregando arquivo…</p>}

          {!loading && error && <p className="text-sm text-destructive">{error}</p>}

          {!loading && !error && blobUrl && isImage && (
            <img src={blobUrl} alt={attachment?.file_name ?? "Arquivo"} className="max-h-[78vh] w-auto max-w-full rounded-md object-contain" />
          )}

          {!loading && !error && blobUrl && isPdf && (
            <iframe src={blobUrl} title={attachment?.file_name ?? "PDF"} className="h-[78vh] w-full rounded-md border bg-background" />
          )}

          {!loading && !error && blobUrl && isVideo && (
            <video src={blobUrl} controls className="max-h-[78vh] w-full rounded-md bg-black" />
          )}

          {!loading && !error && blobUrl && isAudio && (
            <audio src={blobUrl} controls className="w-full max-w-2xl" />
          )}

          {!loading && !error && blobUrl && isText && (
            <iframe src={blobUrl} title={attachment?.file_name ?? "Arquivo de texto"} className="h-[78vh] w-full rounded-md border bg-background" />
          )}

          {!loading && !error && blobUrl && !isImage && !isPdf && !isVideo && !isAudio && !isText && (
            <div className="space-y-3 text-center">
              <p className="text-sm text-muted-foreground">Esse tipo de arquivo não tem preview embutido aqui.</p>
              <Button type="button" onClick={downloadCurrent}>
                <Download className="mr-2 h-4 w-4" />Baixar arquivo
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}