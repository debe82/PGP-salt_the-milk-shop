package se.salt.theMilkShop.models;

import java.util.List;

public record MilkListFileDTO(
    int count,
    List<MilkFileDTO> results
) {
}
