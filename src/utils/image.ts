import html2canvas from 'html2canvas'

export const downloadImage = (id: string, fileName?: string) => {
  const div = document.getElementById(id) as HTMLDivElement

  if (!div) {
    throw new Error(`HTML element not found, please specify the correct id`)
  }

  html2canvas(div).then(function (canvas) {
    const link = document.createElement('a')
    link.download = fileName || 'table.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  })
}
