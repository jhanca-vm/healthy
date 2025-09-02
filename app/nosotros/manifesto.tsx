import List from './list'

export default function Manifesto() {
  return (
    <List
      title="Nuestra razón de ser"
      data={[
        [
          'Simplificamos la búsqueda.',
          'La internet está saturada de recetas, pero la mayoría de las ' +
            'personas ocupadas terminan pidiendo comida a domicilio o ' +
            'comprando alimentos empaquetados. Nosotros seleccionamos una ' +
            'colección de platos infalibles para que dejes de navegar y ' +
            'empieces a cocinar.'
        ],
        [
          'Potenciamos tu cocina.',
          'Cuando controlas lo que entra en tus comidas, controlas cómo te ' +
            'sientes. Cada receta está hecha con ingredientes sin procesar y ' +
            'está lista en solo media hora de preparación activa.'
        ],
        [
          'La salud también es atractiva.',
          'Las imágenes en alta resolución te muestran exactamente cómo es ' +
            'el resultado final. Porque todo entra por los ojos y la ' +
            'confianza es clave.'
        ]
      ]}
    />
  )
}
