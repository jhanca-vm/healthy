import List from './list'

export default function Philosophy() {
  return (
    <List
      title="Nuestra filosofía"
      data={[
        [
          'Ingredientes integrales, ante todo.',
          'Las frutas y verduras frescas, los cereales, las legumbres, las ' +
            'hierbas y las grasas de calidad son la base de cada receta.'
        ],
        [
          'Sabor sin concesiones.',
          'Las especias, los cítricos y los endulzantes naturales sustituyen ' +
            'al exceso de sal, azúcar y aditivos.'
        ],
        [
          'Respeto por el tiempo.',
          'Las comidas entre semana deben adaptarse a horarios reales; ' +
            'cocinar el fin de semana puede ser relajado, pero nunca un ' +
            'desperdicio.'
        ],
        [
          'Opciones sostenibles.',
          'Las listas cortas de ingredientes reducen el desperdicio de ' +
            'alimentos y la huella de carbono, mientras que los platos con ' +
            'base en plantas cuidan del planeta.'
        ]
      ]}
    />
  )
}
