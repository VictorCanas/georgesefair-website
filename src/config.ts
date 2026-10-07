// Enlaces centrales del sitio — actualizar aquí y se reflejan en toda la web.

// URL real de la comunidad en Circle (link de invitación)
export const CIRCLE_URL = 'https://builders-community-d9bf53.circle.so/join?invitation_token=b469a2ccb95a26d09396aad187ee822f3e4ebd38-505fbe83-6d43-468f-9d72-2f2f0775f4d9';

// Redes sociales reales de Dr. Georges Sefair
export const SOCIAL_LINKS = [
  { label: 'IG', name: 'Instagram', url: 'https://www.instagram.com/drgsefair/' },
  { label: 'FB', name: 'Facebook',  url: 'https://www.facebook.com/drgsefair/' },
  { label: 'YT', name: 'YouTube',   url: 'https://www.youtube.com/@drgsefair' },
];

// Videos testimoniales (Google Drive — embebidos vía /preview, no pesan en la web)
export const VIDEOS_RESET_MENTAL = [
  '1JgJODVTNkn5Cn1JVdEk5yIa1SPL_w_0r',
  '1Lomy-odDFtcHoWuMJDqWQZgA_SQUsIxb',
  '1SwZ4nP_aV21-sJJJc7fW_zGyYcOeZdHM',
  '1g-1zQVfYdc0r7I8AG53NfKnqzmHnkJgX',
  '1i0wCsiQkPT23m9r6WlKn2zRSbBti3lKk',
  '1pyW-2Z1GeVOYV3qiWZlR50asucIWTjje',
];

export const VIDEOS_KINGDOM_BUILDERS = [
  '1aJsW1GEgCPLm7hITTM5_cW9Z2zDEcQPi',
  '1FfZ6SD2M7EULpaTruW0i2vLrqR0ojAmM',
];

export const drivePreviewUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
