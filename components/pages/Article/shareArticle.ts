
interface Props {
    userProfile?: string,
    _title?: string,
    pathname?: string,
    platform?: string
}

export function share({
    userProfile,
    _title,
    platform
}: Props) {
    const pageUrl = window.location.href;
    const writerProfil = userProfile ? `@${userProfile}` : null;
    const shareMessage = `${_title} - ${pageUrl} - ${writerProfil} tarafından.`

    let platformUrl = '';

  if (platform === 'twitter') {
    platformUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareMessage);
  } else if (platform === 'facebook') {
    platformUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl);
  } else if (platform === 'whatsapp') {
    platformUrl = `whatsapp://send?text=${encodeURIComponent(shareMessage)}`;
    window.open(platformUrl);
    return;
  }

  if (platformUrl) {
    window.open(platformUrl);
  }
  }