export default async function getAvatar(name, lastName) {
  const data = await fetch(`https://eu.ui-avatars.com/api/?name=${name}+${lastName}&size=200`);
  return data.url;
}
