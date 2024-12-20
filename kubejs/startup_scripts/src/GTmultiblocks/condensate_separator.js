GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    GTRecipeTypes.register('condensate_separator', 'multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 6, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('condensate_separator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('condensate_separator')
        .appearanceBlock(() => Block.getBlock('gtceu:sturdy_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("A###A", "BBCBB", "BBBBB", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "BBBBB", "CCCCC")
            .aisle("#BBB#", "BBBBB", "BEAEB", "BF#FB", "BEAEB", "BF#FB", "BEAEB", "BF#FB", "BEAEB", "BF#FB", "BEAEB", "CBBBC")
            .aisle("#BBB#", "CCACC", "BAAAB", "D#A#D", "DAAAD", "D#A#D", "DAAAD", "D#A#D", "DAAAD", "D#A#D", "BAAAB", "CBSBC")
            .aisle("#BBB#", "BBCBB", "BEAEB", "BF#FB", "BEAEB", "BF#FB", "BEAEB", "BF#FB", "BEAEB", "BF#FB", "BEAEB", "CBBBC")
            .aisle("A###A", "BB@BB", "BBBBB", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "#BDB#", "BBBBB", "CCCCC")
            .where("A", Predicates.blocks("gtceu:blue_alloy_frame"))
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("gtceu:frostproof_machine_casing")
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("C", Predicates.blocks("gtceu:heat_vent"))
            .where("D", Predicates.blocks("gtceu:laminated_glass"))
            .where("E", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
            .where("F", Predicates.blocks("gtceu:tungsten_steel_frame"))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("S", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .build()
        )
            .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_frost_proof', 'gtceu:block/multiblock/implosion_compressor', false)
})               